import { useAuth } from '@/context/AuthContext';

const UserInfo = () => {
    const { isAuthenticated, user } = useAuth();
    console.log(user);

    return (
        <div className='border mt-14 flex flex-col p-2'>
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
