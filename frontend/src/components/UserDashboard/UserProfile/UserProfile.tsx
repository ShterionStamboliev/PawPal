import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';

const UserProfile = () => {
    return (
        <div className=' xl:col-span-5 xl:col-start-1 2xl:col-start-1 lg:row-span-1 rounded-lg bg-white border-white shadow-[_0px_5px_10px_1px_rgba(0,0,0,0.3)]'>
            <UserAvatar />
            <UserInfo />
        </div>
    );
};

export default UserProfile;
