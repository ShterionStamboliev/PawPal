import { dashboardNav } from '@/constants/navigationLinks';
import { User } from 'lucide-react';
import { NavLink } from 'react-router';

const DashboardNavigation = () => {
    return (
        <ul className='col-span-3 2xl:w-2/3 lg:col-span-1 lg:row-start-1 lg:row-span-4 bg-transparent space-y-2 shadow-md rounded-lg text-start py-6 pl-4 font-manrope'>
            {dashboardNav.map((link, idx) => (
                <li
                    key={idx}
                    className='flex items-center p-2 gap-4 rounded-lg hover:bg-rose-400 transition-colors duration-200'
                >
                    <User size={20} className='text-gray-600' />
                    <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                            isActive
                                ? 'text-sm font-semibold tracking-wide text-rose-600 border-r-4 border-rose-700 w-full'
                                : 'text-sm tracking-wide text-gray-600 hover:text-white transition ease-in-out duration-150 w-full'
                        }
                    >
                        {link.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default DashboardNavigation;
