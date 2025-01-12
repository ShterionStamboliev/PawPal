import { headerNavLinks } from '@/constants/navigationLinks';
import { NavLink } from 'react-router';

const HeaderNavigation = () => {
    return (
        <nav className='flex gap-12 items-center'>
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
