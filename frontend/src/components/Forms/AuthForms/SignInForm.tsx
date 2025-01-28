import FormInput from '@/common/FormElements/FormInput';
import PrimaryButton from '@/common/PrimaryButton';
import { useSignIn } from '@/hooks/forms/user/useAuthForms';
import { UserLogin } from '@/models/user';
import { FormProvider } from 'react-hook-form';

type SignInFormProps = {
    handleSubmit: (userData: UserLogin) => void;
    isError: boolean;
};

const SignInForm = ({ handleSubmit, isError }: SignInFormProps) => {
    const { useSignInUser } = useSignIn();
    const form = useSignInUser();

    return (
        <FormProvider {...form}>
            {isError && (
                <span className='text-red-500 text-center'>
                    Invalid email or password
                </span>
            )}
            <form
                id='signin'
                className='space-y-6'
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <FormInput<UserLogin>
                    fieldName='email'
                    inputPlaceholder='Email'
                    inputType='text'
                />
                <FormInput<UserLogin>
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
