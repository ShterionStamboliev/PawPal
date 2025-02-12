import PrimaryButton from '@/common/PrimaryButton';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import EditPetForm from './EditPetForm';
import { Pet } from '@/types/pet';
import { useCachedData } from '@/hooks/queries/useCachedData';
import { findDataById } from '@/helpers/findById';
import dog_paw from '@/assets/dog_paw.png';
import { usePetHandlers } from '@/hooks/forms/pet/mutation-handlers/usePetHandlers';

type EditPetDialogProps = {
    petId: string;
};

const EditPetDialog = ({ petId }: EditPetDialogProps) => {
    const { handleEditPet, isPetEditPending, isOpen, setIsOpen } =
        usePetHandlers(petId);

    const pet = useCachedData<Pet | undefined>(['userProfile'], (data) =>
        findDataById<Pet>(data, petId, (pet) => pet._id),
    );

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <PrimaryButton className='w-full rounded-t-none opacity-20 transition-opacity ease-in-out duration-200 group-hover:opacity-100 bg-transparent'>
                    <span className='text-white font-semibold'>View</span>
                </PrimaryButton>
            </DialogTrigger>
            <DialogContent className='bg-rose-200' aria-describedby={undefined}>
                <DialogHeader>
                    <DialogTitle className='flex flex-col items-center gap-1 justify-center text-2xl mb-6'>
                        Edit pet
                    </DialogTitle>
                    <DialogDescription>
                        {pet?.image ? (
                            <img
                                src={pet?.image}
                                alt='Pet'
                                className='block w-[50%] m-4 rounded-lg mx-auto'
                            />
                        ) : (
                            <img
                                src={dog_paw}
                                className='block w-[50%] mx-auto'
                            />
                        )}
                    </DialogDescription>
                </DialogHeader>
                <EditPetForm
                    isPending={isPetEditPending}
                    handlePetEdit={handleEditPet}
                    petId={petId}
                    pet={pet as Pet}
                />
            </DialogContent>
        </Dialog>
    );
};

export default EditPetDialog;
