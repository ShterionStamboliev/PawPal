import PrimaryButton from '@/common/PrimaryButton';
import { useAuth } from '@/context/AuthContext';
import paw from '@/assets/cat-paw.png';
import { DialogTrigger } from '../ui/dialog';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '../ui/navigation-menu';
import { cn } from '@/lib/utils';
import { userNavigation } from '@/constants/navigationLinks';
import { Link } from 'react-router';
import { Separator } from '../ui/separator';

type HeaderUserDropdownProps = {
    handleSignOut: () => void;
    className?: string;
};

const HeaderUserDropdown = ({
    handleSignOut,
    className,
}: HeaderUserDropdownProps) => {
    const { user, isAuthenticated } = useAuth();

    return (
        <>
            {isAuthenticated ? (
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className='items-center justify-center'>
                            <NavigationMenuTrigger className='bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent p-0'>
                                <div
                                    className={cn(
                                        'relative w-10 h-10 top-2 bg-rose-300 rounded-full',
                                        'md:inline-flex',
                                        className,
                                    )}
                                >
                                    <span
                                        className={cn(
                                            'absolute top-1 left-1 right-1 text-lg font-semibold sm:left-3.5 text-rose-600',
                                            'md:inline-flex',
                                            className,
                                        )}
                                    >
                                        {
                                            user?.firstName?.slice(
                                                0,
                                                user.firstName.length,
                                            )[0]
                                        }
                                    </span>
                                    <span
                                        className={cn(
                                            'text-sm absolute left-12 top-2 text-rose-600',
                                            className,
                                        )}
                                    >
                                        {user?.email}
                                    </span>
                                </div>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className='p-2 w-48 bg-rose-300'>
                                    {userNavigation.map((item, idx) => (
                                        <li key={idx}>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    to={item.path!}
                                                    className='block px-4 py-2 text-sm text-rose-800 hover:bg-rose-600 hover:text-white rounded-md'
                                                >
                                                    {item.name}
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    ))}
                                    <Separator className='bg-rose-500 mt-2' />
                                    <PrimaryButton
                                        onClick={handleSignOut}
                                        className='mt-4 w-full'
                                    >
                                        Sign out
                                    </PrimaryButton>
                                </ul>
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
