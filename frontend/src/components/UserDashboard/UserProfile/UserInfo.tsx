import { useAuth } from '@/context/AuthContext';

type UserInfoProps = {};

const UserInfo = ({}: UserInfoProps) => {
    const { isAuthenticated, user } = useAuth();
    console.log(user);

    return (
        <div className='border mt-4 flex flex-col'>
            {isAuthenticated && (
                <>
                    <div className='flex gap-2'>
                        <span className='font-semibold text-lg'>
                            {user?.firstName}
                        </span>
                        <span className='font-semibold text-lg'>
                            {user?.lastName}
                        </span>
                    </div>
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                </>
            )}
        </div>
    );
};

export default UserInfo;
