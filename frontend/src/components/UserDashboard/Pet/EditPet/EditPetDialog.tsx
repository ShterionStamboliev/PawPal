import PrimaryButton from '@/common/PrimaryButton';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useDialogState } from '@/hooks/useDialogState';
import EditPetForm from './EditPetForm';
import { usePetHook } from '@/hooks/forms/pet/usePetHook';
import { Pet } from '@/models/pet';
import dog from '@/assets/dog-1.jpg';

type EditPetDialogProps = {
    petId: string;
};

const EditPetDialog = ({ petId }: EditPetDialogProps) => {
    const { isOpen, setIsOpen } = useDialogState();
    const { useEditPet } = usePetHook();
    const { mutate, isPending } = useEditPet({
        queryKey: ['userProfile'],
        _id: petId,
        setIsOpen,
    });

    const handlePetEdit = (petData: Pet) => {
        new Promise((resolve) =>
            setTimeout(() => {
                resolve(mutate(petData));
            }, 3000),
        );
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <PrimaryButton className='w-full rounded-t-none opacity-20 transition-opacity ease-in-out duration-200 group-hover:opacity-100 bg-transparent'>
                    <span className='text-white font-semibold '>View</span>
                </PrimaryButton>
            </DialogTrigger>
            <DialogContent className='bg-rose-200' aria-describedby={undefined}>
                <DialogHeader>
                    <DialogTitle className='flex flex-col items-center gap-1 justify-center text-2xl mb-6'>
                        Edit pet
                    </DialogTitle>
                    <DialogDescription>
                        <img
                            src={dog}
                            alt='Pet'
                            className='object-cover rounded-t-xl'
                        />
                    </DialogDescription>
                </DialogHeader>
                <EditPetForm
                    isPending={isPending}
                    handlePetEdit={handlePetEdit}
                    petId={petId}
                />
            </DialogContent>
        </Dialog>
    );
};

export default EditPetDialog;
