import { User } from '@/models/user';
import { FormProvider } from 'react-hook-form';
import FormInput from '@/common/FormElements/FormInput';
import PrimaryButton from '@/common/PrimaryButton';
import { useSignUp } from '@/hooks/forms/user/useAuthForms';

type SignUpFormProps = {
    handleSubmit: (userData: User) => void;
};

const SignUpForm = ({ handleSubmit }: SignUpFormProps) => {
    const form = useSignUp();

    return (
        <FormProvider {...form}>
            <form
                id='signup'
                className='space-y-6'
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <FormInput<User>
                    fieldName='firstName'
                    inputPlaceholder='First name'
                    inputType='text'
                />
                <FormInput<User>
                    fieldName='lastName'
                    inputPlaceholder='Last name'
                    inputType='text'
                />
                <FormInput<User>
                    fieldName='email'
                    inputPlaceholder='Email'
                    inputType='text'
                />
                <FormInput<User>
                    fieldName='password'
                    inputPlaceholder='Password'
                    inputType='password'
                />
                <FormInput<User>
                    fieldName='address.city'
                    inputPlaceholder='City'
                    inputType='text'
                />
                <FormInput<User>
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
