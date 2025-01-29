import { UserData } from '@/models/user';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import doc from '@/assets/doctor-2.jpg';

type UserProfileProps = {
    userData: UserData | undefined;
};

const UserProfile = ({ userData }: UserProfileProps) => {
    return (
        <div className='rounded-lg h-full bg-white border-white shadow-[_0px_5px_10px_1px_rgba(0,0,0,0.3)]'>
            <div className='space-y-6 flex flex-col p-2'>
                <div className='flex items-center flex-1 gap-2'>
                    <span className='font-semibold text-lg'>
                        {userData?.firstName}
                    </span>
                    <span className='font-semibold text-lg'>
                        {userData?.lastName}
                    </span>
                    <Avatar>
                        <AvatarImage src={doc} alt='User' />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
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
