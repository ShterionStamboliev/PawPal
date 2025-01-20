import DashboardHeader from './DashboardHeader';
import DashboardNavigation from './DashboardNavigation';

const Dashboard = () => {
    return (
        <div className='min-h-screen flex flex-col overflow-x-hidden'>
            <DashboardHeader />
            <main className='px-4 pt-4 pb-10'>
                <div className='mt-24'>
                    <DashboardNavigation />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
