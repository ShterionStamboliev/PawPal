import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';

type UserProfileProps = {};

const UserProfile = ({}: UserProfileProps) => {
    return (
        <div className='flex flex-col ml-64 p-2 rounded-lg border max-w-[18rem] bg-white border-white shadow-[_0px_5px_10px_1px_rgba(0,0,0,0.3)] h-[calc(100vh-9.5rem)]'>
            <UserAvatar />
            <UserInfo />
        </div>
    );
};

export default UserProfile;
