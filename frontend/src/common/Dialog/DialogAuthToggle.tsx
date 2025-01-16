import { Button } from '@/components/ui/button';

type DialogAuthToggleProps = {
    switchModals: () => void;
    isSignUp: boolean;
};

const DialogAuthToggle = ({
    switchModals,
    isSignUp,
}: DialogAuthToggleProps) => {
    return (
        <div className='flex items-center justify-center mt-4 gap-2'>
            <span>
                {isSignUp
                    ? "Don't have an account?"
                    : 'Already have an account?'}
            </span>
            <Button
                onClick={switchModals}
                className='font-manrope bg-rose-200 font-semibold text-rose-600 hover:bg-rose-300 hover:text-rose-500'
                variant='outline'
            >
                {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
        </div>
    );
};

export default DialogAuthToggle;
