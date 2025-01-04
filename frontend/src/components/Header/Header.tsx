import paw from '@/assets/cat-paw.png';
import { Button } from '../ui/button';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <header className='bg-orange-200 shadow-orange-200 shadow-sm'>
            <div className='container flex mx-auto p-4 justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img
                        src={paw}
                        alt='Cat Paw'
                        className='h-14 w-14 -rotate-12'
                    />
                    <h1 className='font-modak text-4xl text-red-400'>PawPal</h1>
                </div>

                <nav className='flex gap-4 items-center '>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-2xl font-chewy text-red-400 border-b-2 border-red-500'
                                : 'text-2xl font-chewy text-red-400'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-2xl font-chewy text-red-400'
                                : 'text-2xl font-chewy text-red-400'
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to='/contacts'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-2xl font-chewy text-red-400'
                                : 'text-2xl font-chewy text-red-400'
                        }
                    >
                        Contacts
                    </NavLink>
                </nav>

                <Button className='bg-red-400 font-semibold font-manrope hover:bg-red-300'>
                    <img src={paw} alt='Cat Paw' className='h-6 w-6' />
                    <Link to='/login'>Sign Up</Link>
                </Button>
            </div>
        </header>
    );
};

export default Header;
