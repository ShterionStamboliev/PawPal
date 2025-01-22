import DashboardHeader from './DashboardHeader';
import DashboardNavigation from './DashboardNavigation';
import UserPets from './UserProfile/UserPets';
import UserProfile from './UserProfile/UserProfile';

const Dashboard = () => {
    return (
        <>
            <DashboardHeader />
            <main className='px-4 pt-4 pb-10 min-h-screen flex flex-col overflow-x-hidden bg-gray-200/30'>
                <div className='mt-24'>
                    <DashboardNavigation />
                </div>
                <div className='flex'>
                    <UserProfile />
                    <UserPets />
                </div>
            </main>
        </>
    );
};

export default Dashboard;
