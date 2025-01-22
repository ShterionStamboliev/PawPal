import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';

const UserProfile = () => {
    return (
        <div className='flex flex-col rounded-lg bg-white border-white shadow-[_0px_5px_10px_1px_rgba(0,0,0,0.3)] max-w-sm w-full'>
            <UserAvatar />
            <UserInfo />
        </div>
    );
};

export default UserProfile;
