import paw from '@/assets/cat-paw.png';

const Header = () => {
    return (
        <header className='bg-orange-200 shadow-orange-200 shadow-sm'>
            <div className='container mx-auto p-4'>
                <div className='flex items-center gap-2'>
                    <img
                        src={paw}
                        alt='Cat Paw'
                        className='h-14 w-14 -rotate-12'
                    />
                    <h1 className='font-modak text-4xl text-red-400'>PawPal</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
