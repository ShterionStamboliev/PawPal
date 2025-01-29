import PrimaryButton from '@/common/PrimaryButton';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useDialogState } from '@/hooks/useDialogState';

type EditPetDialogProps = {};

const EditPetDialog = ({}: EditPetDialogProps) => {
    const { isOpen, setIsOpen } = useDialogState();

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <PrimaryButton className='w-full rounded-t-none opacity-20 transition-opacity ease-in-out duration-200 hover:opacity-100 bg-transparent'>
                    <span className='text-white font-semibold '>View</span>
                </PrimaryButton>
            </DialogTrigger>
            <DialogContent className='bg-rose-200' aria-describedby={undefined}>
                <DialogHeader>
                    <DialogTitle className='flex flex-col items-center gap-1 justify-center text-3xl mb-6'>
                        Add new pet
                    </DialogTitle>
                </DialogHeader>
                {/** Edit pet form here */}
            </DialogContent>
        </Dialog>
    );
};

export default EditPetDialog;
