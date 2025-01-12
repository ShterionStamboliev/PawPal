import { footerExploreLinks } from '@/constants/navigationLinks';
import { Link } from 'react-router';

const FooterExplore = () => {
    return (
        <div className='flex flex-col gap-8'>
            <h2 className='font-semibold text-lg uppercase font-manrope'>
                Explore
            </h2>
            <div className='flex flex-col gap-4'>
                {footerExploreLinks.map((link, idx) => (
                    <Link to={link.path} key={idx} className='text-red-950'>
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FooterExplore;
