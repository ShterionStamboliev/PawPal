import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import paw from '@/assets/cat-paw.png';

const UserSignUp = () => {
    return (
        <Dialog>
            <DialogTrigger className='flex gap-2 py-2 px-4 rounded-lg bg-rose-500 text-white font-semibold hover:bg-rose-600 hover:text-white transition-colors ease-in-out duration-150'>
                <img src={paw} alt='Cat Paw' className='h-6 w-6' />
                Sign Up
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default UserSignUp;
