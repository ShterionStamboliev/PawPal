import { Link } from 'react-router';

type HeaderMainTitleProps = {
    paw: string;
};

const HeaderMainTitle = ({ paw }: HeaderMainTitleProps) => {
    return (
        <div className='flex items-center gap-2 flex-shrink-0'>
            <Link className='flex items-center justify-center gap-2' to='/'>
                <img src={paw} alt='Cat Paw' className='h-14 w-14 -rotate-12' />
                <h1 className='hidden md:inline-flex font-modak text-4xl text-rose-800'>
                    PawPal
                </h1>
            </Link>
        </div>
    );
};

export default HeaderMainTitle;
