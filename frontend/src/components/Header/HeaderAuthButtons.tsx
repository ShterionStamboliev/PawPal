import PrimaryButton from '@/common/PrimaryButton';
import { useAuth } from '@/context/AuthContext';
import paw from '@/assets/cat-paw.png';
import { DialogTrigger } from '../ui/dialog';

type HeaderAuthButtonsProps = {
    handleSignOut: () => void;
};

const HeaderAuthButtons = ({ handleSignOut }: HeaderAuthButtonsProps) => {
    const { isAuthenticated } = useAuth();

    return (
        <>
            {isAuthenticated ? (
                <PrimaryButton onClick={handleSignOut}>
                    <img src={paw} alt='Cat Paw' className='h-6 w-6' />
                    Sign out
                </PrimaryButton>
            ) : (
                <DialogTrigger className='flex gap-2 py-2 px-4 rounded-lg bg-rose-500 text-white font-semibold hover:bg-rose-600 hover:text-white transition-colors ease-in-out duration-150'>
                    <img src={paw} alt='Cat Paw' className='h-6 w-6' />
                    Sign In
                </DialogTrigger>
            )}
        </>
    );
};

export default HeaderAuthButtons;
