import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';

const UserProfile = () => {
    return (
        <div className='flex flex-col ml-64 rounded-lg bg-white border-white shadow-[_0px_5px_10px_1px_rgba(0,0,0,0.3)] h-[calc(100vh-9.5rem)]'>
            <UserAvatar />
            <UserInfo />
        </div>
    );
};

export default UserProfile;
