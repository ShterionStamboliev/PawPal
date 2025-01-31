import PrimaryButton from '@/common/PrimaryButton';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import AddPetForm from './AddPetForm';
import { usePetHandlers } from '@/hooks/forms/pet/mutation-handlers/usePetHandlers';

const AddPetDialog = () => {
    const { handleCreatePet, isOpen, setIsOpen } = usePetHandlers();

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <PrimaryButton className='opacity-20 transition-opacity ease-in-out duration-200 hover:opacity-100 bg-transparent rounded-full h-16 w-16'>
                    <span className='text-white font-semibold text-3xl'>+</span>
                </PrimaryButton>
            </DialogTrigger>
            <DialogContent className='bg-rose-200' aria-describedby={undefined}>
                <DialogHeader>
                    <DialogTitle className='flex flex-col items-center gap-1 justify-center text-3xl mb-6'>
                        Add new pet.
                    </DialogTitle>
                </DialogHeader>
                <AddPetForm handleCreatePet={handleCreatePet} />
            </DialogContent>
        </Dialog>
    );
};

export default AddPetDialog;
