import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Separator } from '../../ui/separator';
import HeaderNavigation from '../HeaderNavigation';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '../../ui/dialog';
import { useDialogState, useModalState } from '@/hooks/useDialogState';
import SignInForm from '../../Forms/AuthForms/SignInForm';
import SignUpForm from '../../Forms/AuthForms/SignUpForm';
import { User, UserLogin } from '@/models/user';
import { useState } from 'react';
import HeaderUserAvatar from './HeaderMobileUser';
import DialogHeaderTitle from '@/common/Dialog/DialogHeaderTitle';
import DialogAuthToggle from '@/common/Dialog/DialogAuthToggle';
import HeaderAuthToggle from './HeaderAuthToggle';

type HeaderMobileNavigationProps = {
    handleSignOut: () => void;
    handleSignIn: (userData: UserLogin) => void;
    handleSignUp: (userData: User) => void;
    isError: boolean;
};

const HeaderMobileNavigation = ({
    handleSignOut,
    handleSignIn,
    handleSignUp,
    isError,
}: HeaderMobileNavigationProps) => {
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
                            <HeaderUserAvatar />
                        </SheetTitle>
                    </SheetHeader>
                    <Separator />
                    <HeaderNavigation className='flex flex-col items-start gap-6 md:hidden' />
                    <HeaderAuthToggle
                        handleSignOut={handleSignOut}
                        setIsOpen={setIsOpen}
                        setIsSheetOpen={setIsSheetOpen}
                    />
                </SheetContent>
            </Sheet>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent
                    className='bg-rose-200 max-w-[25rem] rounded-xl'
                    aria-describedby={undefined}
                >
                    <DialogHeader>
                        <DialogTitle className='flex flex-col items-center gap-1 justify-center text-3xl mb-6'>
                            <DialogHeaderTitle isSignUp={isSignUp} />
                        </DialogTitle>
                    </DialogHeader>
                    {isSignUp ? (
                        <SignInForm
                            handleSubmit={signInAndClose}
                            isError={isError}
                        />
                    ) : (
                        <SignUpForm handleSubmit={handleSignUp} />
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
    );
};

export default HeaderMobileNavigation;
