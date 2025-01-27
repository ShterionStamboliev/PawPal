import { UserData } from '@/models/user';

type DashboardHeaderAvatarProps = {
    user: UserData | null;
};

const DashboardHeaderAvatar = ({ user }: DashboardHeaderAvatarProps) => {
    return (
        <div className='relative w-10 h-10 top-2 bg-rose-300 rounded-full'>
            <span className='absolute top-1 left-1 right-1 md:right-0 text-lg font-semibold text-rose-600'>
                {user?.firstName?.slice(0, user.firstName.length)[0]}
            </span>
        </div>
    );
};

export default DashboardHeaderAvatar;
