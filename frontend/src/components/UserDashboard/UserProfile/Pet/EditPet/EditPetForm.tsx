import FormInput from '@/common/FormElements/FormInput';
import PrimaryButton from '@/common/PrimaryButton';
import { findDataById } from '@/helpers/findById';
import { useEditPet } from '@/hooks/forms/pet/usePetForms';
import { useCachedData } from '@/hooks/queries/useCachedData';
import { Pet } from '@/types/pet';
import { Pet as PetSchema } from '@/models/pet';

import { FormProvider } from 'react-hook-form';

type EditPetFormProps = {
    handlePetEdit: (petData: PetSchema) => void;
    petId: string;
};

const EditPetForm = ({ petId, handlePetEdit }: EditPetFormProps) => {
    const { useEditPetForm } = useEditPet();

    const pet = useCachedData<Pet | undefined>(['userProfile'], (data) =>
        findDataById<Pet>(data, petId, (pet) => pet._id),
    );

    const form = useEditPetForm(pet as Pet);

    return (
        <FormProvider {...form}>
            <form
                onSubmit={form.handleSubmit(handlePetEdit)}
                className='space-y-6'
                id='edit-pet'
            >
                <FormInput<Pet>
                    fieldName='name'
                    inputPlaceholder='Pet name'
                    inputType='text'
                />
                <FormInput<Pet>
                    fieldName='age'
                    inputPlaceholder='Pet age'
                    inputType='text'
                />
                <FormInput<Pet>
                    fieldName='breed'
                    inputPlaceholder='Pet breed'
                    inputType='text'
                />
                <PrimaryButton
                    type='submit'
                    id='edit-pet'
                    className='w-full rounded-xl'
                >
                    Submit
                </PrimaryButton>
            </form>
        </FormProvider>
    );
};

export default EditPetForm;
