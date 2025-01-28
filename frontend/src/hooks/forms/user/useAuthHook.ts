import { useAuth } from '@/context/AuthContext';
import { User, UserLogin } from '@/models/user';
import {
    QueryKey,
    useMutation,
    UseMutationResult,
    useQueryClient,
} from '@tanstack/react-query';
import { toast } from '../../use-toast';

export interface MutationActionState {
    queryKey: QueryKey;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useAuthHook = () => {
    const client = useQueryClient();

    const { login, register, logout } = useAuth();

    const useSignUp = ({
        queryKey,
        setIsOpen,
    }: MutationActionState): UseMutationResult<void, Error, User, unknown> => {
        return useMutation({
            mutationFn: (data: User) => register(data),
            onSuccess: () => {
                client.invalidateQueries({
                    queryKey,
                });
                setIsOpen && setIsOpen(false);
            },
            onError: (error: Error) => {
                return error.message;
            },
        });
    };

    const useSignIn = ({
        setIsOpen,
    }: MutationActionState): UseMutationResult<
        void,
        Error,
        UserLogin,
        unknown
    > => {
        return useMutation({
            mutationFn: async (data: UserLogin) => {
                await login(data);
            },
            onSuccess: () => {
                const user: User = JSON.parse(
                    sessionStorage.getItem('user') || '{}',
                );
                setIsOpen && setIsOpen(false);
                toast({
                    title: 'Sign in successful',
                    description: `Welcome, ${user.firstName}!`,
                    variant: 'success',
                });
            },
            onError: (error: Error) => {
                return error.message;
            },
        });
    };

    const useSignOut = ({ queryKey }: MutationActionState) => {
        return useMutation({
            mutationFn: logout,
            onSuccess: () => {
                client.invalidateQueries({
                    queryKey,
                });
            },
            onError: (error: Error) => {
                return error.message;
            },
        });
    };

    return {
        useSignUp,
        useSignIn,
        useSignOut,
    };
};
