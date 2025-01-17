import { useAuth } from '@/context/AuthContext';
import { User, UserLogin } from '@/models/user';
import {
    QueryKey,
    useMutation,
    UseMutationResult,
    useQueryClient,
} from '@tanstack/react-query';
import { toast } from '../use-toast';

interface MutationActionState {
    queryKey: QueryKey;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useMutations = () => {
    const client = useQueryClient();

    const { user, login, register, logout } = useAuth();

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
        queryKey,
        setIsOpen,
    }: MutationActionState): UseMutationResult<
        void,
        Error,
        UserLogin,
        unknown
    > => {
        return useMutation({
            mutationFn: (data: UserLogin) => login(data),
            onSuccess: () => {
                client.invalidateQueries({
                    queryKey,
                });
                setIsOpen && setIsOpen(false);
                toast({
                    title: 'Sign in successful',
                    description: `Welcome, ${user?.firstName}!`,
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
                toast({
                    title: 'Sign out successful',
                    variant: 'success',
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
