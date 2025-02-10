import { useDialogState } from '@/hooks/useDialogState';
import { usePetHook } from '../usePetHook';
import { Pet } from '@/models/pet';

export const usePetHandlers = () => {
    const { useCreatePet } = usePetHook();

    const { isOpen, setIsOpen } = useDialogState();

    const { mutate: createMutation, isError } = useCreatePet({
        queryKey: ['userProfile'],
        setIsOpen,
    });

    const handleCreatePet = (petData: Pet) => {
        createMutation(petData);
    };

    return {
        handleCreatePet,
        isError,
        isOpen,
        setIsOpen,
    };
};
