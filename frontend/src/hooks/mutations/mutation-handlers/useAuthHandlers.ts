import { useLocation, useNavigate } from 'react-router';
import { useMutations } from '../useMutationHook';
import { toast } from '../../use-toast';
import { User, UserLogin } from '@/models/user';
import { useDialogState } from '@/hooks/useDialogState';

export const useAuthHandlers = () => {
    const { useSignOut, useSignIn, useSignUp } = useMutations();
    const { isOpen, setIsOpen } = useDialogState();

    const navigate = useNavigate();

    const pathname = useLocation();

    const { mutate: signOutMutate } = useSignOut({
        queryKey: ['user'],
    });

    const { mutate: signInMutate, isError: signInError } = useSignIn({
        queryKey: ['user'],
        setIsOpen,
    });

    const { mutate: signUpMutate } = useSignUp({
        queryKey: ['user'],
        setIsOpen,
    });

    const handleSignOutSubmit = () => {
        signOutMutate(undefined, {
            onSuccess: () => {
                if (pathname.pathname === '/') {
                    toast({
                        title: 'Sign out successful',
                        variant: 'success',
                    });
                } else {
                    toast({
                        title: 'Sign out successful',
                        description:
                            'You will be redirected to the homepage now',
                        variant: 'success',
                        duration: 3000,
                    });
                }
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            },
        });
    };

    const handleSignInSubmit = (userData: UserLogin) => {
        signInMutate(userData);
    };

    const handleSignUpSubmit = (userData: User) => {
        signUpMutate(userData);
    };

    return {
        handleSignOutSubmit,
        handleSignInSubmit,
        handleSignUpSubmit,
        signInError,
        isOpen,
        setIsOpen,
    };
};
