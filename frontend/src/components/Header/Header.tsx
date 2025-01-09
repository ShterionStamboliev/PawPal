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
        <header className='bg-rose-200 shadow-orange-300 shadow-sm fixed top-0 left-0 right-0 z-50'>
            <div className='flex mx-auto px-8 md:px-12 py-5 justify-between items-center backdrop-blur-sm backdrop-brightness-90'>
                <div className='flex items-center gap-2 flex-shrink-0'>
                    <img
                        src={paw}
                        alt='Cat Paw'
                        className='h-14 w-14 -rotate-12'
                    />
                    <h1 className='hidden md:inline-flex font-modak text-4xl text-rose-800'>
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
                                    ? 'text-2xl font-chewy text-rose-600'
                                    : 'text-2xl font-chewy text-rose-900 hover:text-rose-600 transition ease-in-out duration-150'
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
                <Button className='flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg font-semibold font-manrope hover:bg-rose-600 transition-all'>
                    <img src={paw} alt='Cat Paw' className='h-6 w-6' />
                    <Link to='/login'>Sign Up</Link>
                </Button>
            </div>
        </header>
    );
};

export default Header;
