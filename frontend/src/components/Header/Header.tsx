import paw from '@/assets/cat-paw.png';
import { Link } from 'react-router';
import HeaderNavigation from './HeaderNavigation';
import PrimaryButton from '@/common/PrimaryButton';

const Header = () => {
    return (
        <header className='bg-rose-200/90 shadow-rose-300 shadow-sm fixed top-0 left-0 right-0 z-50'>
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
                <HeaderNavigation />
                <PrimaryButton>
                    <img src={paw} alt='Cat Paw' className='h-6 w-6' />
                    <Link to='/login'>Sign Up</Link>
                </PrimaryButton>
            </div>
        </header>
    );
};

export default Header;
