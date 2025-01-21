import doc from '@/assets/doctor-2.jpg';
type UserAvatarProps = {};

const UserAvatar = ({}: UserAvatarProps) => {
    return (
        <div>
            <img
                className='aspect-square rounded-lg w-full h-full object-fill'
                src={doc}
            />
        </div>
    );
};

export default UserAvatar;
