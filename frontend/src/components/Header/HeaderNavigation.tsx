import { navLinks } from '@/constants/navigationLinks';
import { NavLink } from 'react-router';

const HeaderNavigation = () => {
    return (
        <nav className='flex gap-12 items-center'>
            {navLinks.map((link) => (
                <NavLink
                    to={link.path}
                    key={link.name}
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
