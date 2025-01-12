import { footerServicesLinks } from '@/constants/navigationLinks';
import { Link } from 'react-router';

const FooterServices = () => {
    return (
        <div className='flex flex-col gap-8'>
            <h2 className='font-semibold text-lg uppercase font-manrope'>
                Services
            </h2>
            <div className='flex flex-col gap-4'>
                {footerServicesLinks.map((link, idx) => (
                    <Link
                        to={link.path}
                        key={idx}
                        className='text-red-950 hover:text-rose-600 transition-colors ease-in-out duration-200'
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FooterServices;
