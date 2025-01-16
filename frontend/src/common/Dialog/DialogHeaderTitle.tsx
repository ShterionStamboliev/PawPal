import paw from '@/assets/cat-paw.png';

type DialogHeaderTitleProps = {
    isSignUp: boolean;
};

const DialogHeaderTitle = ({ isSignUp }: DialogHeaderTitleProps) => {
    return (
        <>
            <img src={paw} className='h-20 w-20 -rotate-12' />
            <span className='font-normal'>
                {isSignUp ? 'Sign in to' : 'Sign up to'}
                <span className='font-modak ml-2 text-rose-800 tracking-wide text-4xl'>
                    PawPal
                </span>
            </span>
        </>
    );
};

export default DialogHeaderTitle;
