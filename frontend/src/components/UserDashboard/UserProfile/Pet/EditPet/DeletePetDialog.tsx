import { CircleAlert, X } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { usePetHook } from '@/hooks/forms/pet/usePetHook';

type DeletePetDialogProps = {
    petId: string;
};

const DeletePetDialog = ({ petId }: DeletePetDialogProps) => {
    const { useDeletePet } = usePetHook();

    const { mutate } = useDeletePet({
        queryKey: ['userProfile'],
        _id: petId,
    });

    const handlePetDelete = () => {
        mutate();
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <X
                    size={20}
                    className='absolute opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bg-red-600 -right-2 -top-2 rounded-full'
                />
            </AlertDialogTrigger>
            <AlertDialogContent className='border-none'>
                <AlertDialogHeader>
                    <div className='flex text-center justify-center items-center'>
                        <CircleAlert size={48} className='text-red-600' />
                    </div>
                    <AlertDialogTitle className='text-red-500'>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your pet from your data.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className='border-slate-700'>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        asChild
                        className='bg-red-600 hover:bg-red-500 hover:text-white'
                    >
                        <Button onClick={handlePetDelete}>Delete</Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeletePetDialog;
