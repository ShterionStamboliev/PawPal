import { useLocation, useNavigate } from 'react-router';
import { useMutations } from '../useMutationHook';
import { toast } from '../../use-toast';

export const useAuthHandlers = () => {
    const { useSignOut } = useMutations();

    const navigate = useNavigate();

    const pathname = useLocation();

    const { mutate: signOutMutate } = useSignOut({
        queryKey: ['user'],
    });

    const handleSignOutSubmit = () => {
        signOutMutate(undefined, {
            onSuccess: () => {
                toast({
                    title: 'Sign out successful',
                    description: 'You will be redirected to the homepage now',
                    variant: 'success',
                    duration: 3000,
                });
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            },
        });
    };

    return {
        handleSignOutSubmit,
    };
};
