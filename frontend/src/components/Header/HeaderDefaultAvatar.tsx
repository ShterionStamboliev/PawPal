import { User } from 'lucide-react';

const HeaderDefaultAvatar = () => {
    return (
        <div className='relative w-10 h-10 bg-red-300 rounded-full'>
            <span className='absolute top-1 left-1 right-1 sm:left-3.5 text-rose-600'>
                <User size={24} className='absolute right-1 top-1' />
            </span>
        </div>
    );
};

export default HeaderDefaultAvatar;
