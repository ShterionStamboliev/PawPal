import PrimaryButton from '@/common/PrimaryButton';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Separator } from '../ui/separator';
import HeaderNavigation from './HeaderNavigation';
import { useAuth } from '@/context/AuthContext';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '../ui/dialog';
import { useDialogState, useModalState } from '@/hooks/useDialogState';
import paw from '@/assets/cat-paw.png';
import SignInForm from '../Forms/AuthForms/SignInForm';
import SignUpForm from '../Forms/AuthForms/SignUpForm';
import { User, UserLogin } from '@/models/user';
import { Button } from '../ui/button';
import { useState } from 'react';

type HeaderMobileNavigationProps = {
    handleSignOut: () => void;
    handleSignIn: (userData: UserLogin) => void;
    handleSignUp: (userData: User) => void;
};

const HeaderMobileNavigation = ({
    handleSignOut,
    handleSignIn,
    handleSignUp,
}: HeaderMobileNavigationProps) => {
    const { user, isAuthenticated } = useAuth();
    const { isOpen, setIsOpen } = useDialogState();
    const { isSignUp, switchModals } = useModalState();
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const signInAndClose = async (userData: UserLogin) => {
        handleSignIn(userData);
        setIsOpen(false);
    };

    return (
        <div className='flex md:hidden'>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Menu className='text-rose-600' size={24} />
                </SheetTrigger>
                <SheetContent
                    className='rounded-r-lg border-none bg-rose-200 flex flex-col'
                    side='left'
                    aria-describedby={undefined}
                >
                    <SheetHeader>
                        <SheetTitle className='flex flex-col gap-4'>
                            {isAuthenticated && (
                                <div className='relative w-10 h-10 bg-red-300 rounded-full'>
                                    <span className='absolute top-1 left-1 right-1 sm:left-3.5 text-rose-600'>
                                        {
                                            user?.firstName?.slice(
                                                0,
                                                user.firstName.length,
                                            )[0]
                                        }
                                    </span>
                                    <span className='text-sm absolute left-12 top-2 text-rose-600'>
                                        {user?.email}
                                    </span>
                                </div>
                            )}
                        </SheetTitle>
                    </SheetHeader>
                    <Separator />
                    <HeaderNavigation className='flex flex-col items-start gap-6 md:hidden' />
                    {isAuthenticated ? (
                        <PrimaryButton
                            className='sm:flex sm:flex-1'
                            type='submit'
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </PrimaryButton>
                    ) : (
                        <PrimaryButton
                            onClick={() => {
                                setIsOpen(true);
                                setIsSheetOpen(false);
                            }}
                            className='flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-rose-500 text-white font-semibold hover:bg-rose-600 hover:text-white transition-colors ease-in-out duration-150'
                        >
                            Sign In
                        </PrimaryButton>
                    )}
                </SheetContent>
            </Sheet>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent
                    className='bg-rose-200 max-w-[25rem] rounded-xl'
                    aria-describedby={undefined}
                >
                    <DialogHeader>
                        <DialogTitle className='flex flex-col items-center gap-1 justify-center text-3xl mb-6'>
                            <img src={paw} className='h-20 w-20 -rotate-12' />
                            <span className='font-normal'>
                                {isSignUp ? 'Sign in to' : 'Sign up to'}
                                <span className='font-modak ml-2 text-rose-800 tracking-wide text-4xl'>
                                    PawPal
                                </span>
                            </span>
                        </DialogTitle>
                    </DialogHeader>
                    {isSignUp ? (
                        <SignInForm handleSubmit={signInAndClose} />
                    ) : (
                        <SignUpForm handleSubmit={handleSignUp} />
                    )}
                    <DialogFooter>
                        <div className='flex items-center justify-center mt-4 gap-2'>
                            <span className=''>
                                {isSignUp
                                    ? "Don't have an account?"
                                    : 'Already have an account?'}
                            </span>
                            <Button
                                onClick={switchModals}
                                className='font-manrope bg-rose-200 font-semibold text-rose-600 hover:bg-rose-300 hover:text-rose-500'
                                variant='outline'
                            >
                                {isSignUp ? 'Sign Up' : 'Sign In'}
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default HeaderMobileNavigation;
