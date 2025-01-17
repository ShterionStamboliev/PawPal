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
import SignUpForm from '../AuthForms/SignUpForm';
import SignInForm from '../AuthForms/SignInForm';
import HeaderMobileNavigation from '@/components/Header/HeaderMobile/HeaderMobileNavigation';
import HeaderUserAvatar from '@/components/Header/HeaderUserAvatar';
import HeaderAuthButtons from '@/components/Header/HeaderAuthButtons';
import DialogHeaderTitle from '@/common/Dialog/DialogHeaderTitle';
import DialogAuthToggle from '@/common/Dialog/DialogAuthToggle';

const UserAuthModal = () => {
    const { isOpen, setIsOpen } = useDialogState();

    const { isSignUp, switchModals } = useModalState();

    const { useSignUp, useSignIn, useSignOut } = useMutations();

    const { mutate: signUpMutate } = useSignUp({
        queryKey: ['user'],
        setIsOpen,
    });

    const { mutate: signInMutate, isError } = useSignIn({
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
                                <DialogHeaderTitle isSignUp={isSignUp} />
                            </DialogTitle>
                        </DialogHeader>
                        {isSignUp ? (
                            <SignInForm
                                handleSubmit={handleSignInSubmit}
                                isError={isError}
                            />
                        ) : (
                            <SignUpForm handleSubmit={handleSignUpSubmit} />
                        )}
                        <DialogFooter>
                            <DialogAuthToggle
                                isSignUp={isSignUp}
                                switchModals={switchModals}
                            />
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
