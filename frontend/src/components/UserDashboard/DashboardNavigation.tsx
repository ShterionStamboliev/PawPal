import { dashboardNav } from '@/constants/navigationLinks';
import { User } from 'lucide-react';
import { NavLink } from 'react-router';

const DashboardNavigation = () => {
    return (
        <div className='max-w-[15rem]'>
            <ul className='fixed flex flex-col border bg-white border-white shadow-[_0px_5px_10px_1px_rgba(0,0,0,0.3)] rounded-lg gap-8 text-start pt-10 h-[calc(100vh-9.5rem)] min-w-[15rem] items-start font-manrope'>
                {dashboardNav.map((link, idx) => (
                    <li key={idx} className='w-full h-8 flex items-center'>
                        <div className='flex gap-2 ml-10'>
                            <div className='flex flex-col'>
                                <User size={20} />
                            </div>
                        </div>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-sm font-manrope tracking-wide w-full border-rose-700 border-r-2 text-rose-600 font-semibold'
                                    : 'text-sm font-manrope tracking-wide w-full text-rose-900 hover:text-rose-600 text-gray-500/80 transition ease-in-out duration-150'
                            }
                        >
                            <span className='pl-3'>{link.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DashboardNavigation;
