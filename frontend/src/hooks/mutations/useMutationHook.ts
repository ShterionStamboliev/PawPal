import { useAuth } from '@/context/AuthContext';
import { User, UserLogin } from '@/models/user';
import {
    QueryKey,
    useMutation,
    UseMutationResult,
    useQueryClient,
} from '@tanstack/react-query';

interface MutationActionState {
    queryKey: QueryKey;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useMutations = () => {
    const client = useQueryClient();
    const { login, register } = useAuth();

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
            onError: () => {
                console.log('Something went wrong');
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
            },
            onError: () => {
                console.log('Something wrong happened');
            },
        });
    };

    return {
        useSignUp,
        useSignIn,
    };
};
