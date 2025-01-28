import FormInput from '@/common/FormElements/FormInput';
import { useCreatePet } from '@/hooks/forms/pet/usePet';
import { Pet } from '@/models/pet';
import { FormProvider } from 'react-hook-form';

type NewPetFormProps = {};

const NewPetForm = ({}: NewPetFormProps) => {
    const { useCreateNewPet } = useCreatePet();
    const form = useCreateNewPet();

    return (
        <FormProvider {...form}>
            <form>
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
            </form>
        </FormProvider>
    );
};

export default NewPetForm;
