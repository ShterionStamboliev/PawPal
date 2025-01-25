import { UserData } from '@/models/user';
import UserAvatar from './UserAvatar';

type UserProfileProps = {
    userData: UserData | undefined;
};

const UserProfile = ({ userData }: UserProfileProps) => {
    return (
        <div className='xl:col-span-5 xl:col-start-1 2xl:col-start-1 lg:row-span-1 rounded-lg bg-white border-white shadow-[_0px_5px_10px_1px_rgba(0,0,0,0.3)]'>
            <UserAvatar />
            <div className='space-y-6 mt-14 flex flex-col p-2'>
                <div className='flex flex-1 gap-2'>
                    <span className='font-semibold text-lg'>
                        {userData?.firstName}
                    </span>
                    <span className='font-semibold text-lg'>
                        {userData?.lastName}
                    </span>
                </div>
                <div className='space-y-4'>
                    <div className='flex flex-1 flex-wrap justify-between'>
                        <span className='text-gray-500/80'>Email:</span>
                        <span>{userData?.email}</span>
                    </div>
                    <div className='flex flex-1 flex-wrap justify-between'>
                        <span className='text-gray-500/80'>City:</span>
                        <span>{userData?.address.city}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
