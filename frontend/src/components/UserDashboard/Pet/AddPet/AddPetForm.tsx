import FormInput from '@/common/FormElements/FormInput';
import PrimaryButton from '@/common/PrimaryButton';
import { useCreatePet } from '@/hooks/forms/pet/usePetForms';
import { Pet } from '@/models/pet';
import { FormProvider, SubmitHandler } from 'react-hook-form';

type AddPetFormProps = {
    handleCreatePet: SubmitHandler<Pet>;
};

const AddPetForm = ({ handleCreatePet }: AddPetFormProps) => {
    const { form, isDirty, isSubmitting } = useCreatePet();

    return (
        <FormProvider {...form}>
            <form
                onSubmit={form.handleSubmit(handleCreatePet)}
                className='space-y-6'
                id='add-pet'
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
                    id='add-pet'
                    className='w-full rounded-xl'
                    disabled={!isDirty || isSubmitting}
                >
                    Submit
                </PrimaryButton>
            </form>
        </FormProvider>
    );
};

export default AddPetForm;
