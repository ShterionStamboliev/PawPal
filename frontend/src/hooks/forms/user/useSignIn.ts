import { UserLogin, UserLoginDefaults, UserLoginSchema } from '@/models/user';
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
