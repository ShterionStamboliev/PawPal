import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { useMutations } from '@/hooks/mutations/useMutationHook';
import { useDialogState, useModalState } from '@/hooks/useDialogState';
import { User, UserLogin } from '@/models/user';
import paw from '@/assets/cat-paw.png';
import SignUpForm from '../AuthForms/SignUpForm';
import SignInForm from '../AuthForms/SignInForm';
import { Button } from '@/components/ui/button';
import HeaderMobileNavigation from '@/components/Header/HeaderMobileNavigation';
import HeaderUserAvatar from '@/components/Header/HeaderUserAvatar';
import HeaderAuthButtons from '@/components/Header/HeaderAuthButtons';

const UserAuthModal = () => {
    const { isOpen, setIsOpen } = useDialogState();

    const { isSignUp, switchModals } = useModalState();

    const { useSignUp, useSignIn, useSignOut } = useMutations();

    const { mutate: signUpMutate } = useSignUp({
        queryKey: ['user'],
        setIsOpen,
    });

    const { mutate: signInMutate } = useSignIn({
        queryKey: ['user'],
        setIsOpen,
    });

    const { mutate: signOutMutate } = useSignOut({
        queryKey: ['user'],
    });

    const handleSignUpSubmit = (userData: User) => {
        signUpMutate(userData);
    };

    const handleSignInSubmit = (userData: UserLogin) => {
        signInMutate(userData);
    };

    const handleSignOutSubmit = () => {
        signOutMutate();
    };

    return (
        <div className='flex items-center justify-center gap-4'>
            <HeaderUserAvatar className='hidden' />
            <div className='hidden md:flex'>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <HeaderAuthButtons handleSignOut={handleSignOutSubmit} />
                    <DialogContent
                        className='bg-rose-200'
                        aria-describedby={undefined}
                    >
                        <DialogHeader>
                            <DialogTitle className='flex flex-col items-center gap-1 justify-center text-3xl mb-6'>
                                <img
                                    src={paw}
                                    className='h-20 w-20 -rotate-12'
                                />
                                <span className='font-normal'>
                                    {isSignUp ? 'Sign in to' : 'Sign up to'}
                                    <span className='font-modak ml-2 text-rose-800 tracking-wide text-4xl'>
                                        PawPal
                                    </span>
                                </span>
                            </DialogTitle>
                        </DialogHeader>
                        {isSignUp ? (
                            <SignInForm handleSubmit={handleSignInSubmit} />
                        ) : (
                            <SignUpForm handleSubmit={handleSignUpSubmit} />
                        )}
                        <DialogFooter>
                            <span>
                                {isSignUp
                                    ? "Don't have an account?"
                                    : 'Already have an account?'}
                            </span>
                            <Button onClick={switchModals}>
                                {isSignUp ? 'Sign Up' : 'Sign In'}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <HeaderMobileNavigation
                handleSignOut={handleSignOutSubmit}
                handleSignIn={handleSignInSubmit}
                handleSignUp={handleSignUpSubmit}
            />
        </div>
    );
};

export default UserAuthModal;
