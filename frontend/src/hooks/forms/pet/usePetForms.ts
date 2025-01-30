import { Pet, PetCreateDefaults, PetSchema } from '@/models/pet';
import { useCreateDynamicForms } from '../useCreateDynamicForms';

export const useCreatePet = () => {
    const { useCreateForm } = useCreateDynamicForms<Pet>({
        schema: PetSchema,
        defaultValues: PetCreateDefaults,
    });

    const form = useCreateForm();
    return form;
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
