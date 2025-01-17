import { FieldValues } from 'react-hook-form';
import { CreateFormOptions, useCreateFormHooks } from './useCreateFormHooks';

export const useCreateDynamicForms = <T extends FieldValues>({
    schema,
    defaultValues,
}: CreateFormOptions<T>) => {
    return useCreateFormHooks<T>({
        schema: schema,
        defaultValues: defaultValues,
    });
};
