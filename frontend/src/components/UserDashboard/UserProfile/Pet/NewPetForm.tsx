import FormInput from '@/common/FormElements/FormInput';
import PrimaryButton from '@/common/PrimaryButton';
import { useCreatePet } from '@/hooks/forms/pet/usePetForms';
import { Pet } from '@/models/pet';
import { FormProvider } from 'react-hook-form';

type NewPetFormProps = {};

const NewPetForm = ({}: NewPetFormProps) => {
    const { useCreateNewPet } = useCreatePet();
    const form = useCreateNewPet();

    return (
        <FormProvider {...form}>
            <form className='space-y-6' id='add-pet'>
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
                <FormInput<Pet>
                    fieldName='image'
                    inputPlaceholder='Pet Image'
                    inputType='file'
                />
                <PrimaryButton
                    type='submit'
                    id='add-pet'
                    className='w-full rounded-xl'
                >
                    Submit
                </PrimaryButton>
            </form>
        </FormProvider>
    );
};

export default NewPetForm;
