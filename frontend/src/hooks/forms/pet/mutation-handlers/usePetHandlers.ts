import { useDialogState } from '@/hooks/useDialogState';
import { usePetHook } from '../usePetHook';
import { Pet } from '@/models/pet';

export const usePetHandlers = (petId?: string) => {
    const { useCreatePet, useEditPet } = usePetHook();

    const { isOpen, setIsOpen } = useDialogState();

    const {
        mutate: createMutation,
        isPending: isPetCreationPending,
        isError,
    } = useCreatePet({
        queryKey: ['userProfile'],
        setIsOpen,
    });

    const { mutate: editMutation, isPending: isPetEditPending } = useEditPet({
        queryKey: ['userProfile'],
        _id: petId,
        setIsOpen,
    });

    const handleCreatePet = async (petData: Pet) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        createMutation(petData);
    };

    const handleEditPet = (petData: Pet) => {
        editMutation(petData);
    };

    return {
        handleCreatePet,
        handleEditPet,
        isPetEditPending,
        isPetCreationPending,
        isError,
        isOpen,
        setIsOpen,
    };
};
