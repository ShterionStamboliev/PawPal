import paw from '@/assets/cat-paw.png';
import { Link } from 'react-router';
import HeaderNavigation from './HeaderNavigation';
import PrimaryButton from '@/common/PrimaryButton';
import HeaderMainTitle from './HeaderMainTitle';

const Header = () => {
    return (
        <header className='bg-rose-200/90 shadow-rose-300 shadow-sm fixed top-0 left-0 right-0 z-50'>
            <div className='flex mx-auto px-8 md:px-12 py-5 justify-between items-center backdrop-blur-sm backdrop-brightness-90'>
                <HeaderMainTitle paw={paw} />
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
