import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import paw from '@/assets/cat-paw.png';
import SignUpForm from '../AuthForms/SignUpForm';
import { User } from '@/models/user';

const UserSignUp = () => {
    const handleSubmit = (userData: User) => {
        console.log(userData);
    };

    return (
        <Dialog>
            <DialogTrigger className='flex gap-2 py-2 px-4 rounded-lg bg-rose-500 text-white font-semibold hover:bg-rose-600 hover:text-white transition-colors ease-in-out duration-150'>
                <img src={paw} alt='Cat Paw' className='h-6 w-6' />
                Sign Up
            </DialogTrigger>
            <DialogContent className='bg-rose-200' aria-describedby={undefined}>
                <DialogHeader>
                    <DialogTitle className='flex flex-col items-center gap-1 justify-center text-3xl mb-6'>
                        <img src={paw} className='h-20 w-20 -rotate-12' />
                        <span className='font-normal'>
                            Sign up to
                            <span className='font-modak ml-2 text-rose-800 tracking-wide text-4xl'>
                                PawPal
                            </span>
                        </span>
                    </DialogTitle>
                </DialogHeader>
                <SignUpForm handleSubmit={handleSubmit} />
            </DialogContent>
        </Dialog>
    );
};

export default UserSignUp;
