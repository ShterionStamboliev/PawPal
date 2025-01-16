import { useAuth } from '@/context/AuthContext';

type HeaderUserAvatarProps = {};

const HeaderUserAvatar = ({}: HeaderUserAvatarProps) => {
    const { user, isAuthenticated } = useAuth();

    return (
        <>
            {isAuthenticated && (
                <div className='relative w-10 h-10 bg-red-300 rounded-full'>
                    <span className='absolute top-1 left-1 right-1 sm:left-3.5 text-rose-600'>
                        {user?.firstName?.slice(0, user.firstName.length)[0]}
                    </span>
                    <span className='text-sm absolute left-12 top-2 text-rose-600'>
                        {user?.email}
                    </span>
                </div>
            )}
        </>
    );
};

export default HeaderUserAvatar;
