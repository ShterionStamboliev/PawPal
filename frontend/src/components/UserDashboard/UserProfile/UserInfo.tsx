import { useAuth } from '@/context/AuthContext';

const UserInfo = () => {
    const { isAuthenticated, user } = useAuth();

    return (
        <div className='space-y-6 mt-14 flex flex-col p-2'>
            {isAuthenticated && (
                <>
                    <div className='flex flex-1 flex-wrap gap-2'>
                        <span className='font-semibold text-lg'>
                            {user?.firstName}
                        </span>
                        <span className='font-semibold text-lg'>
                            {user?.lastName}
                        </span>
                    </div>
                    <div className='space-y-4'>
                        <div className='flex flex-1 break-words flex-wrap justify-between'>
                            <span className='text-gray-500/80'>Email:</span>
                            <span>{user?.email}</span>
                        </div>
                        <div className='flex flex-1 flex-wrap justify-between'>
                            <span className='text-gray-500/80'>City:</span>
                            <span>{user?.address.city}</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default UserInfo;
