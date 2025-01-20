import { dashboardNav } from '@/constants/navigationLinks';
import { User } from 'lucide-react';
import { NavLink } from 'react-router';

type DashboardNavigationProps = {};

const DashboardNavigation = ({}: DashboardNavigationProps) => {
    return (
        <div className='max-w-[15rem]'>
            <ul className='fixed flex flex-col border bg-white border-white shadow-[_0px_5px_10px_1px_rgba(0,0,0,0.3)] rounded-lg gap-8 text-start pt-10 h-[calc(100vh-9.5rem)] min-w-[15rem] items-start font-manrope'>
                {dashboardNav.map((link, idx) => (
                    <NavLink
                        to={link.path}
                        key={idx}
                        className={({ isActive }) =>
                            isActive
                                ? 'text-lg font-manrope'
                                : 'text-lg font-manrope w-full border-rose-700 text-rose-600 border-l-4 transition ease-in-out duration-150'
                        }
                    >
                        <div className='flex items-center justify-between'>
                            <User className='w-1/4 pl-10' size={20} />
                            <li className='w-2/3'>{link.name}</li>
                        </div>
                    </NavLink>
                ))}
            </ul>
        </div>
    );
};

export default DashboardNavigation;
