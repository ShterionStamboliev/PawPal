import PrimaryButton from '@/common/PrimaryButton';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Separator } from '../ui/separator';
import HeaderNavigation from './HeaderNavigation';
import { useAuth } from '@/context/AuthContext';

type HeaderMobileNavigationProps = {
    handleSignOut: () => void;
};

const HeaderMobileNavigation = ({
    handleSignOut,
}: HeaderMobileNavigationProps) => {
    const { user, logout } = useAuth();

    return (
        <div className='flex md:hidden'>
            <Sheet>
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
                        </SheetTitle>
                    </SheetHeader>
                    <Separator />
                    <HeaderNavigation className='flex flex-col items-start gap-6 md:hidden' />
                    <SheetFooter>
                        <SheetClose asChild>
                            <PrimaryButton
                                className='sm:flex sm:flex-1'
                                type='submit'
                                onClick={handleSignOut}
                            >
                                Sign out
                            </PrimaryButton>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default HeaderMobileNavigation;
