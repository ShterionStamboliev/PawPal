import {
    User,
    UserLogin,
    UserLoginDefaults,
    UserLoginSchema,
    UserRegisterDefaults,
    UserSchema,
} from '@/models/user';
import { useCreateDynamicForms } from '../useCreateDynamicForms';

export const useSignIn = () => {
    const { useCreateForm } = useCreateDynamicForms<UserLogin>({
        schema: UserLoginSchema,
        defaultValues: UserLoginDefaults,
    });

    return {
        useSignInUser: useCreateForm,
    };
};

export const useSignUp = () => {
    const { useCreateForm } = useCreateDynamicForms<User>({
        schema: UserSchema,
        defaultValues: UserRegisterDefaults,
    });
    return {
        useSignUpUser: useCreateForm,
    };
};
