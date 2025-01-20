type DashboardNavigationProps = {};

const DashboardNavigation = ({}: DashboardNavigationProps) => {
    return (
        <div className='max-w-[15rem]'>
            <ul className='fixed flex flex-col gap-8 pt-10 h-[calc(100vh-10rem)] min-w-[15rem] items-center'>
                <li>Profile</li>
                <li>Manage</li>
                <li>My pets</li>
            </ul>
        </div>
    );
};

export default DashboardNavigation;
