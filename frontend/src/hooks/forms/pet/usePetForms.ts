import { Pet, PetCreateDefaults, PetSchema } from '@/models/pet';
import { useCreateDynamicForms } from '../useCreateDynamicForms';

export const useCreatePet = () => {
    const { useCreateForm } = useCreateDynamicForms<Pet>({
        schema: PetSchema,
        defaultValues: PetCreateDefaults,
    });

    const form = useCreateForm();
    const { isDirty, isSubmitting } = form.formState;

    return { form, isDirty, isSubmitting };
};

export const useEditPet = () => {
    const { useEditForm } = useCreateDynamicForms<Pet>({
        schema: PetSchema,
        defaultValues: PetCreateDefaults,
    });

    return {
        useEditPetForm: useEditForm,
    };
};
