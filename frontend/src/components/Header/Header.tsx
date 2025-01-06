import paw from '@/assets/cat-paw.png';
import { Button } from '../ui/button';
import { Link, NavLink } from 'react-router';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contacts', path: '/contacts' },
];

const Header = () => {
    return (
        <header className='bg-orange-200/50 shadow-orange-200 shadow-sm fixed top-0 left-0 right-0 z-50'>
            <div className='flex mx-auto px-8 md:px-12 py-4 justify-between items-center backdrop-blur-sm'>
                <div className='flex items-center gap-2 flex-shrink-0'>
                    <img
                        src={paw}
                        alt='Cat Paw'
                        className='h-14 w-14 -rotate-12'
                    />
                    <h1 className='hidden md:inline-flex font-modak text-4xl text-red-400'>
                        PawPal
                    </h1>
                </div>
                <nav className='flex gap-12 items-center'>
                    {navLinks.map((link) => (
                        <NavLink
                            to={link.path}
                            key={link.name}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-2xl font-chewy text-red-400'
                                    : 'text-2xl font-chewy text-red-300 hover:text-red-400'
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
                <Button className='bg-red-400 font-semibold font-manrope hover:bg-red-400/80'>
                    <img src={paw} alt='Cat Paw' className='h-6 w-6' />
                    <Link to='/login'>Sign Up</Link>
                </Button>
            </div>
        </header>
    );
};

export default Header;
