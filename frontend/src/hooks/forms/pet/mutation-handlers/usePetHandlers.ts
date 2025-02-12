import { useDialogState } from '@/hooks/useDialogState';
import { usePetHook } from '../usePetHook';
import { Pet } from '@/models/pet';

export const usePetHandlers = (petId?: string) => {
    const { useCreatePet, useEditPet } = usePetHook();

    const { isOpen, setIsOpen } = useDialogState();

    const { mutate: createMutation, isError } = useCreatePet({
        queryKey: ['userProfile'],
        setIsOpen,
    });

    const { mutate: editMutation, isPending: isPetEditPending } = useEditPet({
        queryKey: ['userProfile'],
        _id: petId,
        setIsOpen,
    });

    const handleCreatePet = (petData: Pet) => {
        createMutation(petData);
    };

    const handleEditPet = (petData: Pet) => {
        editMutation(petData);
    };

    return {
        handleCreatePet,
        handleEditPet,
        isPetEditPending,
        isError,
        isOpen,
        setIsOpen,
    };
};
