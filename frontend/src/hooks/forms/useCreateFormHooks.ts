import { FieldValues } from 'react-hook-form';
import { FormSchemaOptions, useFormSchema } from '@/hooks/forms/useFormSchema';

export interface CreateFormOptions<T extends FieldValues>
    extends Partial<FormSchemaOptions<T>> {}

export const useCreateFormHooks = <T extends FieldValues>({
    schema,
    defaultValues,
}: CreateFormOptions<T>) => {
    const useCreateForm = () => {
        return useFormSchema<T>({
            schema: schema!,
            defaultValues: defaultValues!,
        });
    };

    const useEditForm = (formData: Partial<T>) => {
        return useFormSchema<T>({
            schema: schema!,
            defaultValues: { ...defaultValues! },
            ...formData,
        });
    };

    return {
        useCreateForm,
        useEditForm,
    };
};
