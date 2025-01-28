import PrimaryButton from '@/common/PrimaryButton';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import NewPetForm from './NewPetForm';

const AddNewPet = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <PrimaryButton className='bg-transparent rounded-full h-16 w-16'>
                        <span className='text-white font-semibold text-3xl'>
                            +
                        </span>
                    </PrimaryButton>
                </DialogTrigger>
                <DialogContent
                    className='bg-rose-200'
                    aria-describedby={undefined}
                >
                    <DialogHeader>
                        <DialogTitle className='flex flex-col items-center gap-1 justify-center text-3xl mb-6'>
                            Add new pet
                        </DialogTitle>
                    </DialogHeader>
                    <NewPetForm />
                    {/** ------Add form here------ */}
                    <DialogFooter>
                        <PrimaryButton>Submit</PrimaryButton>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default AddNewPet;
