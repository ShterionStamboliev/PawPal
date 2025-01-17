import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

type FormInputProps<FData> = {
    fieldName: keyof FData & string;
    inputPlaceholder: string;
    inputType: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = <FData,>({
    fieldName,
    inputPlaceholder,
    inputType,
}: FormInputProps<FData>) => {
    const { control } = useFormContext();

    return (
        <FormField
            control={control}
            name={fieldName}
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <Input
                            type={inputType}
                            placeholder={inputPlaceholder}
                            className='rounded-xl'
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FormInput;
