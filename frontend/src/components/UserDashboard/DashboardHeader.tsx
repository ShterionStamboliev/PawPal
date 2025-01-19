import { useAuth } from '@/context/AuthContext';
import HeaderMainTitle from '../Header/HeaderMainTitle';
import paw from '@/assets/cat-paw.png';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '../ui/navigation-menu';
import HeaderUser from '../Header/HeaderUser';
import HeaderUserNavigation from '../Header/HeaderUserNavigation';
import { useAuthHandlers } from '@/hooks/mutations/mutation-handlers/useAuthHandlers';

type DashboardHeaderProps = {};

const DashboardHeader = ({}: DashboardHeaderProps) => {
    const { isAuthenticated } = useAuth();

    const { handleSignOutSubmit } = useAuthHandlers();

    return (
        <header className='bg-rose-200/90 shadow-rose-300 shadow-sm fixed top-0 left-0 right-0 z-50'>
            <div className='flex mx-auto px-8 md:px-12 py-5 justify-between items-center backdrop-blur-sm backdrop-brightness-90'>
                <HeaderMainTitle paw={paw} />
                {isAuthenticated && (
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem className='items-center justify-center'>
                                <NavigationMenuTrigger className='bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent p-0'>
                                    <HeaderUser className='hidden' />
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <HeaderUserNavigation
                                        handleSignOut={handleSignOutSubmit}
                                    />
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                )}
            </div>
        </header>
    );
};

export default DashboardHeader;
