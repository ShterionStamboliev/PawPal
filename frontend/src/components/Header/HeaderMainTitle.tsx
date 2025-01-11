type HeaderMainTitleProps = {
    paw: string;
};

const HeaderMainTitle = ({ paw }: HeaderMainTitleProps) => {
    return (
        <div className='flex items-center gap-2 flex-shrink-0'>
            <img src={paw} alt='Cat Paw' className='h-14 w-14 -rotate-12' />
            <h1 className='hidden md:inline-flex font-modak text-4xl text-rose-800'>
                PawPal
            </h1>
        </div>
    );
};

export default HeaderMainTitle;
