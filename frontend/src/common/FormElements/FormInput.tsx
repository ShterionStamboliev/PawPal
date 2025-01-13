import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormContext } from 'react-hook-form';

type FormInputProps = {
    fieldName: string;
    inputPlaceholder: string;
    inputType: string;
};

const FormInput = ({
    fieldName,
    inputPlaceholder,
    inputType,
}: FormInputProps) => {
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
