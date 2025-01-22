import { dashboardNav } from '@/constants/navigationLinks';
import { User } from 'lucide-react';
import { NavLink } from 'react-router';

const DashboardNavigation = () => {
    return (
        <div className='w-1/5 lg:mr-10 pt-4'>
            <ul className='grid gap-2 bg-white border border-white shadow-md rounded-lg text-start py-6 px-4 font-manrope'>
                {dashboardNav.map((link, idx) => (
                    <li
                        key={idx}
                        className='flex items-center gap-4 p-2 rounded-lg hover:bg-rose-400 transition-colors duration-200'
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
        </div>
    );
};

export default DashboardNavigation;
