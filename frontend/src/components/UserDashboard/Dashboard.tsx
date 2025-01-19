import DashboardHeader from './DashboardHeader';

const Dashboard = () => {
    return (
        <div className='min-h-screen flex flex-col overflow-x-hidden'>
            <DashboardHeader />
            <main className='px-4 pt-4 pb-10'></main>
        </div>
    );
};

export default Dashboard;
