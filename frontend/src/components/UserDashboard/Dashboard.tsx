import DashboardHeader from './DashboardHeader';
import DashboardNavigation from './DashboardNavigation';
import UserPayments from './UserProfile/UserPayments';
import UserPets from './UserProfile/UserPets';
import UserProfile from './UserProfile/UserProfile';

const Dashboard = () => {
    return (
        <>
            <DashboardHeader />
            <main className='w-full px-4 pt-24 min-h-screen flex flex-col lg:flex-row overflow-x-hidden bg-gray-200/30'>
                <DashboardNavigation />
                <div className='grid grid-cols-1 w-full gap-4 pt-4 lg:grid-cols-3 h-[calc(100vh-9.5rem)]'>
                    <UserProfile />
                    <div className='grid col-span-2 gap-4'>
                        <UserPets />
                        <UserPayments />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
