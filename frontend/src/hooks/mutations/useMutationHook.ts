import { signUp } from '@/api/api';
import { User } from '@/models/user';
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

    const useSignUp = ({
        queryKey,
        setIsOpen,
    }: MutationActionState): UseMutationResult<void, Error, User, unknown> => {
        return useMutation({
            mutationFn: (data: User) => signUp(data),
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

    return {
        useSignUp,
    };
};
