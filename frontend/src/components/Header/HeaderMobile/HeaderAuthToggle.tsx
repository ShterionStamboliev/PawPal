import PrimaryButton from '@/common/PrimaryButton';
import { useAuth } from '@/context/AuthContext';

type HeaderAuthToggleProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleSignOut: () => void;
};

const HeaderAuthToggle = ({
    setIsOpen,
    setIsSheetOpen,
    handleSignOut,
}: HeaderAuthToggleProps) => {
    const { isAuthenticated } = useAuth();
    return (
        <>
            {isAuthenticated ? (
                <PrimaryButton
                    className='sm:flex sm:flex-1'
                    type='submit'
                    onClick={handleSignOut}
                >
                    Sign Out
                </PrimaryButton>
            ) : (
                <PrimaryButton
                    onClick={() => {
                        setIsOpen(true);
                        setIsSheetOpen(false);
                    }}
                    className='flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-rose-500 text-white font-semibold hover:bg-rose-600 hover:text-white transition-colors ease-in-out duration-150'
                >
                    Sign In
                </PrimaryButton>
            )}
        </>
    );
};

export default HeaderAuthToggle;
