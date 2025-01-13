import { User, UserSchema } from '@/models/user';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/common/FormElements/FormInput';
import PrimaryButton from '@/common/PrimaryButton';

type SignUpFormProps = {
    handleSubmit: (userData: User) => void;
};

const SignUpForm = ({ handleSubmit }: SignUpFormProps) => {
    const form = useForm<User>({
        resolver: zodResolver(UserSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: {
                city: '',
                phone: '',
            },
        },
        mode: 'onSubmit',
    });

    return (
        <FormProvider {...form}>
            <form
                id='signup'
                className='space-y-6'
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <FormInput
                    fieldName='firstName'
                    inputPlaceholder='First name'
                    inputType='text'
                />
                <FormInput
                    fieldName='lastName'
                    inputPlaceholder='Last name'
                    inputType='text'
                />
                <FormInput
                    fieldName='email'
                    inputPlaceholder='Email'
                    inputType='text'
                />
                <FormInput
                    fieldName='password'
                    inputPlaceholder='Password'
                    inputType='password'
                />
                <FormInput
                    fieldName='address.city'
                    inputPlaceholder='City'
                    inputType='text'
                />
                <FormInput
                    fieldName='address.phone'
                    inputPlaceholder='Phone'
                    inputType='text'
                />
                <PrimaryButton
                    type='submit'
                    id='signup'
                    className='w-full rounded-xl'
                >
                    Sign up
                </PrimaryButton>
            </form>
        </FormProvider>
    );
};

export default SignUpForm;
