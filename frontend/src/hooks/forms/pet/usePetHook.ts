import {
    useMutation,
    UseMutationResult,
    useQueryClient,
} from '@tanstack/react-query';
import { MutationActionState } from '../user/useAuthHook';
import { Pet } from '@/models/pet';
import { addNewPet } from '@/api/petApi';

export const usePetHook = () => {
    const client = useQueryClient();

    const useCreatePet = ({
        queryKey,
        setIsOpen,
    }: MutationActionState): UseMutationResult<void, Error, Pet, unknown> => {
        return useMutation({
            mutationFn: (data: Pet) => addNewPet(data),
            onSuccess: () => {
                client.invalidateQueries({ queryKey });
                setIsOpen && setIsOpen(false);
            },
            onError: (error: Error) => {
                return error.message;
            },
        });
    };

    return {
        useCreatePet,
    };
};
