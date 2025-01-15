import FormInput from '@/common/FormElements/FormInput';
import PrimaryButton from '@/common/PrimaryButton';
import { UserLogin, UserLoginSchema } from '@/models/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

type SignInFormProps = {
    handleSubmit: (userData: UserLogin) => void;
};

const SignInForm = ({ handleSubmit }: SignInFormProps) => {
    const form = useForm<UserLogin>({
        resolver: zodResolver(UserLoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onSubmit',
    });

    return (
        <FormProvider {...form}>
            <form
                id='signin'
                className='space-y-6'
                onSubmit={form.handleSubmit(handleSubmit)}
            >
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
                <PrimaryButton
                    type='submit'
                    id='signin'
                    className='w-full rounded-xl'
                >
                    Sign in
                </PrimaryButton>
            </form>
        </FormProvider>
    );
};

export default SignInForm;
