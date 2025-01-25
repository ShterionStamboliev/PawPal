import { useGetUserData } from '@/hooks/queries/user/useQueryHook';
import DashboardHeader from './DashboardHeader';
import DashboardNavigation from './DashboardNavigation';
import UserPayments from './UserProfile/UserPayments';
import UserPets from './UserProfile/UserPets';
import UserProfile from './UserProfile/UserProfile';

const Dashboard = () => {
    const { data: userData, isPending } = useGetUserData();

    if (isPending) {
        return <p>Loading...</p>;
    }
    console.log(userData);

    return (
        <>
            <DashboardHeader />
            <main className='px-4 pt-28 min-h-screen grid gap-4 grid-cols-1 grid-flow-row lg:grid-cols-6 bg-gray-200/30'>
                <DashboardNavigation />
                <div className='grid col-start-1 col-span-3 lg:col-span-2 2xl:col-span-1 lg:col-start-3 gap-4 lg:h-[calc(100vh-9.5rem)]'>
                    <UserProfile userData={userData} />
                </div>
                <div className='grid gap-4 lg:col-span-2 2xl:pr-4 2xl:col-span-3 col-span-3 h-[calc(100vh-9.5rem)]'>
                    <UserPets userData={userData} />
                    <UserPayments />
                </div>
            </main>
        </>
    );
};

export default Dashboard;
