import { useGetUserData } from '@/hooks/queries/user/useQueryHook';

const UserInfo = () => {
    const { data: userData, isPending } = useGetUserData();
    console.log(userData);

    if (isPending) {
        return <p>Loading...</p>;
    }

    return (
        <div className='space-y-6 mt-14 flex flex-col p-2'>
            <div className='flex flex-1 flex-wrap gap-2'>
                <span className='font-semibold text-lg'>
                    {userData?.firstName}
                </span>
                <span className='font-semibold text-lg'>
                    {userData?.lastName}
                </span>
            </div>
            <div className='space-y-4'>
                <div className='flex flex-1 break-words flex-wrap justify-between'>
                    <span className='text-gray-500/80'>Email:</span>
                    <span>{userData?.email}</span>
                </div>
                <div className='flex flex-1 flex-wrap justify-between'>
                    <span className='text-gray-500/80'>City:</span>
                    <span>{userData?.address.city}</span>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
