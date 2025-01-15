import { headerNavLinks } from '@/constants/navigationLinks';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router';

type HeaderNavigationProps = {
    className?: string;
};

const HeaderNavigation = ({ className }: HeaderNavigationProps) => {
    return (
        <nav className={cn('hidden md:flex gap-12 items-center', className)}>
            {headerNavLinks.map((link, idx) => (
                <NavLink
                    to={link.path}
                    key={idx}
                    className={({ isActive }) =>
                        isActive
                            ? 'text-2xl font-chewy text-rose-600'
                            : 'text-2xl font-chewy text-rose-900 hover:text-rose-600 transition ease-in-out duration-150'
                    }
                >
                    {link.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default HeaderNavigation;
