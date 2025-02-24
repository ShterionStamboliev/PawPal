import FormInput from '@/common/FormElements/FormInput';
import PrimaryButton from '@/common/PrimaryButton';
import { useEditPet } from '@/hooks/forms/pet/usePetForms';
import { Pet } from '@/types/pet';
import { Pet as PetSchema } from '@/models/pet';
import { FormProvider } from 'react-hook-form';
import DropzoneInput from '../Dropzone';

type EditPetFormProps = {
    handlePetEdit: (petData: PetSchema) => void;
    pet: Pet;
    petId: string;
    isPending: boolean;
};

const EditPetForm = ({
    pet,
    petId,
    handlePetEdit,
    isPending,
}: EditPetFormProps) => {
    const { useEditPetForm } = useEditPet();

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
                <DropzoneInput name='image' petId={petId} />
                <PrimaryButton
                    type='submit'
                    id='edit-pet'
                    className='w-full rounded-xl'
                    disabled={!form.formState.isDirty || isPending}
                >
                    Submit
                </PrimaryButton>
            </form>
        </FormProvider>
    );
};

export default EditPetForm;
