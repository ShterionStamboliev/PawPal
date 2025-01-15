import paw from '@/assets/cat-paw.png';
import HeaderNavigation from './HeaderNavigation';
import HeaderMainTitle from './HeaderMainTitle';
import UserAuthModal from '../Forms/UserAuthModal/UserAuthModal';
import { useAuth } from '@/context/AuthContext';

const Header = () => {
    const { user } = useAuth();
    return (
        <header className='bg-rose-200/90 shadow-rose-300 shadow-sm fixed top-0 left-0 right-0 z-50'>
            <div className='flex mx-auto px-8 md:px-12 py-5 justify-between items-center backdrop-blur-sm backdrop-brightness-90'>
                <HeaderMainTitle paw={paw} />
                <HeaderNavigation />
                <span>Welcome, {user?.email}</span>
                <UserAuthModal />
            </div>
        </header>
    );
};

export default Header;
