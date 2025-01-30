import {
    useMutation,
    UseMutationResult,
    useQueryClient,
} from '@tanstack/react-query';
import { MutationActionState, MutationPetAction } from '../user/useAuthHook';
import { addNewPet, deletePet, updatePet } from '@/api/petApi';
import { Pet } from '@/models/pet';

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

    const useDeletePet = ({ queryKey, _id, setIsOpen }: MutationPetAction) => {
        return useMutation({
            mutationFn: () => deletePet(_id as string),
            onSuccess: () => {
                client.invalidateQueries({ queryKey });
                setIsOpen && setIsOpen(false);
            },
            onError: (error: Error) => {
                return error.message;
            },
        });
    };

    const useEditPet = ({ queryKey, _id, setIsOpen }: MutationPetAction) => {
        return useMutation({
            mutationFn: (petData: Pet) => updatePet(petData, _id as string),
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
        useDeletePet,
        useEditPet,
    };
};
