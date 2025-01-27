import { useGetUserData } from '@/hooks/queries/user/useQueryHook';
import DashboardHeader from './DashboardHeader';
import UserPayments from './UserProfile/UserPayments';
import UserPets from './UserProfile/UserPets';
import UserProfile from './UserProfile/UserProfile';
import DashboardSideNavigation from './DashboardSideNavigation';
import AddNewPet from './UserProfile/AddNewPet';

const Dashboard = () => {
    const { data: userData, isPending } = useGetUserData();

    if (isPending) {
        return <p>Loading...</p>;
    }
    console.log(userData);

    return (
        <>
            <DashboardHeader />
            <main className='grid grid-cols-1 gap-4 h-screen lg:grid-cols-5 lg:grid-rows-10 px-4 pt-28 bg-gray-200/30'>
                <DashboardSideNavigation />
                <div className='col-span-3 gap-4 xl:row-span-4 2xl:col-span-1 lg:row-span-4 2xl:row-span-4 lg:col-start-2 lg:col-span-2 2xl:col-start-2'>
                    <UserProfile userData={userData} />
                </div>
                <div className='lg:col-start-1 flex justify-end'>
                    <AddNewPet />
                </div>
                <div className='col-span-3 xl:col-start-2 xl:col-span-5 2xl:col-start-2 2xl:col-span-3 xl:row-span-4 2xl:row-start-5 lg:row-span-4 lg:col-start-2 lg:col-span-5'>
                    <UserPets userData={userData} />
                </div>
                <div className='col-span-3 lg:row-start-1 lg:row-span-4 lg:col-start-4 lg:col-span-3 2xl:col-start-3 2xl:col-span-2'>
                    <UserPayments />
                </div>
            </main>
        </>
    );
};

export default Dashboard;
