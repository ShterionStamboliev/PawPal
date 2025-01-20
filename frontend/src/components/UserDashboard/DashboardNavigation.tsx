import { dashboardNav } from '@/constants/navigationLinks';
import { User } from 'lucide-react';
import { NavLink } from 'react-router';

type DashboardNavigationProps = {};

const DashboardNavigation = ({}: DashboardNavigationProps) => {
    return (
        <div className='max-w-[15rem]'>
            <ul className='fixed flex flex-col border bg-white border-white shadow-[_0px_5px_10px_1px_rgba(0,0,0,0.3)] rounded-lg gap-8 text-start pt-10 h-[calc(100vh-9.5rem)] min-w-[15rem] items-start font-manrope'>
                {dashboardNav.map((link, idx) => (
                    <li key={idx} className='w-full flex'>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-lg font-manrope border-rose-700 text-rose-600 border-l-2'
                                    : 'text-lg font-manrope transition ease-in-out duration-150'
                            }
                        >
                            <div className='flex items-start gap-2 ml-10'>
                                <div className='flex flex-col items-center'>
                                    <User size={24} />
                                </div>
                                <span>{link.name}</span>
                            </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DashboardNavigation;
