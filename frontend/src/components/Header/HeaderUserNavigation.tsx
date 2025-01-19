import { userNavigation } from '@/constants/navigationLinks';
import { NavigationMenuLink } from '../ui/navigation-menu';
import { Link } from 'react-router';
import { Separator } from '../ui/separator';
import PrimaryButton from '@/common/PrimaryButton';

type HeaderUserNavigationProps = {
    handleSignOut: () => void;
};

const HeaderUserNavigation = ({ handleSignOut }: HeaderUserNavigationProps) => {
    return (
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
            <PrimaryButton onClick={handleSignOut} className='mt-4 w-full'>
                Sign out
            </PrimaryButton>
        </ul>
    );
};

export default HeaderUserNavigation;
