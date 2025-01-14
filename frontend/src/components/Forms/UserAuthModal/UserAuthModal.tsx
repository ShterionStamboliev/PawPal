import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useMutations } from '@/hooks/mutations/useMutationHook';
import { useDialogState, useModalState } from '@/hooks/useDialogState';
import { User, UserLogin } from '@/models/user';
import paw from '@/assets/cat-paw.png';
import SignUpForm from '../AuthForms/SignUpForm';
import SignInForm from '../AuthForms/SignInForm';
import { Button } from '@/components/ui/button';

const UserAuthModal = () => {
    const { isOpen, setIsOpen } = useDialogState();
    const { isSignUp, setIsSignUp } = useModalState();

    const { useSignUp, useSignIn } = useMutations();

    const { mutate: signUpMutate } = useSignUp({
        queryKey: ['user'],
        setIsOpen,
    });

    const { mutate: signInMutate } = useSignIn({
        queryKey: ['user'],
        setIsOpen,
    });

    const handleSignUpSubmit = (userData: User) => {
        signUpMutate(userData);
    };

    const handleSignInSubmit = (userData: UserLogin) => {
        console.log(userData);
        signInMutate(userData);
    };

    const switchModals = () => setIsSignUp((prev) => !prev);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger className='flex gap-2 py-2 px-4 rounded-lg bg-rose-500 text-white font-semibold hover:bg-rose-600 hover:text-white transition-colors ease-in-out duration-150'>
                <img src={paw} alt='Cat Paw' className='h-6 w-6' />
                {isSignUp ? 'Sign Up' : 'Sign In'}
            </DialogTrigger>
            <DialogContent className='bg-rose-200' aria-describedby={undefined}>
                <DialogHeader>
                    <DialogTitle className='flex flex-col items-center gap-1 justify-center text-3xl mb-6'>
                        <img src={paw} className='h-20 w-20 -rotate-12' />
                        <span className='font-normal'>
                            {isSignUp ? 'Sign up to' : 'Sign in to'}
                            <span className='font-modak ml-2 text-rose-800 tracking-wide text-4xl'>
                                PawPal
                            </span>
                        </span>
                    </DialogTitle>
                </DialogHeader>
                {isSignUp ? (
                    <SignUpForm handleSubmit={handleSignUpSubmit} />
                ) : (
                    <SignInForm handleSubmit={handleSignInSubmit} />
                )}
                <DialogFooter>
                    <span>
                        {isSignUp
                            ? 'Already have an account?'
                            : "Don't have an account?"}
                    </span>
                    <Button
                        onClick={switchModals}
                        id={isSignUp ? 'signup' : 'signin'}
                    >
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UserAuthModal;
