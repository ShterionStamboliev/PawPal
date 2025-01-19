import { useAuth } from '@/context/AuthContext';
import paw from '@/assets/cat-paw.png';
import { DialogTrigger } from '../ui/dialog';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '../ui/navigation-menu';
import HeaderUser from './HeaderUser';
import HeaderUserNavigation from './HeaderUserNavigation';

type HeaderUserDropdownProps = {
    handleSignOut: () => void;
};

const HeaderUserDropdown = ({ handleSignOut }: HeaderUserDropdownProps) => {
    const { isAuthenticated } = useAuth();

    return (
        <>
            {isAuthenticated ? (
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className='items-center justify-center'>
                            <NavigationMenuTrigger className='bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent p-0'>
                                <HeaderUser className='hidden' />
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <HeaderUserNavigation
                                    handleSignOut={handleSignOut}
                                />
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            ) : (
                <DialogTrigger className='flex gap-2 py-2 px-4 rounded-lg bg-rose-500 text-white font-semibold hover:bg-rose-600 hover:text-white transition-colors ease-in-out duration-150'>
                    <img src={paw} alt='Cat Paw' className='h-6 w-6' />
                    Sign In
                </DialogTrigger>
            )}
        </>
    );
};

export default HeaderUserDropdown;
