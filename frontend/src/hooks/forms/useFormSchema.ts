import { zodResolver } from '@hookform/resolvers/zod';
import {
    DefaultValues,
    FieldValues,
    useForm,
    UseFormProps,
} from 'react-hook-form';
import { ZodType } from 'zod';

export interface FormSchemaOptions<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: DefaultValues<T>;
    options?: Omit<UseFormProps<T>, 'resolver' | 'defaultValues'>;
    mode?: 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all' | undefined;
}

export const useFormSchema = <T extends FieldValues>({
    schema,
    defaultValues,
    options,
    mode,
}: FormSchemaOptions<T>) => {
    const form = useForm<T>({
        resolver: zodResolver(schema),
        defaultValues,
        mode,
        ...options,
    });

    return form;
};
