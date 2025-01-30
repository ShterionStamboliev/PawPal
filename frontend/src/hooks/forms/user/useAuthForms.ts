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

    const form = useCreateForm();
    return form;
};

export const useSignUp = () => {
    const { useCreateForm } = useCreateDynamicForms<User>({
        schema: UserSchema,
        defaultValues: UserRegisterDefaults,
    });

    const form = useCreateForm();
    return form;
};
