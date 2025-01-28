import { renderHook, act } from '@testing-library/react-hooks';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { toast } from '../../use-toast';
import { useAuth } from '../../../context/AuthContext';
import { useMutations } from './useAuthHook';

vi.mock('../../context/AuthContext');
vi.mock('../use-toast');

describe('useMutations', () => {
    const mockQueryClient = new QueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={mockQueryClient}>
            {children}
        </QueryClientProvider>
    );

    const mockRegister = vi.fn();
    const mockLogin = vi.fn();
    const mockLogout = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        vi.fn(useAuth as any).mockReturnValue({
            register: mockRegister,
            login: mockLogin,
            logout: mockLogout,
        });
    });

    it('should call register on useSignUp mutationFn', async () => {
        const { result } = renderHook(() => useMutations(), { wrapper });

        const { useSignUp } = result.current;

        const mutation = useSignUp({ queryKey: ['user'] });

        await act(async () => {
            await mutation.mutateAsync({
                email: 'test@test.com',
                password: '123456',
                firstName: 'test test',
                lastName: 'testttttt',
                address: {
                    city: 'Pasdasda',
                    phone: 888888880,
                },
            });
        });

        expect(mockRegister).toHaveBeenCalledWith({
            email: 'test@test.com',
            password: '123456',
        });
    });

    it('should call login and display toast on useSignIn mutationFn success', async () => {
        sessionStorage.setItem(
            'user',
            JSON.stringify({ firstName: 'John', lastName: 'Doe' }),
        );

        const { result } = renderHook(() => useMutations(), { wrapper });

        const { useSignIn } = result.current;

        const mutation = useSignIn({ queryKey: ['user'] });

        await act(async () => {
            await mutation.mutateAsync({
                email: 'test@test.com',
                password: '123456',
            });
        });

        expect(mockLogin).toHaveBeenCalledWith({
            email: 'test@test.com',
            password: '123456',
        });

        expect(toast).toHaveBeenCalledWith({
            title: 'Sign in successful',
            description: 'Welcome, John!',
            variant: 'success',
        });
    });

    it('should call logout on useSignOut mutationFn success', async () => {
        const { result } = renderHook(() => useMutations(), { wrapper });

        const { useSignOut } = result.current;

        const mutation = useSignOut({ queryKey: ['user'] });

        await act(async () => {
            await mutation.mutateAsync();
        });

        expect(mockLogout).toHaveBeenCalled();
    });
});
