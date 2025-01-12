import { Separator } from '../ui/separator';
import FooterContacts from './FooterContacts';
import FooterExplore from './FooterExplore';
import FooterServices from './FooterServices';
import FooterSocials from './FooterSocials';

const Footer = () => {
    return (
        <>
            <footer className='w-full bg-rose-400 text-white gap-10 py-16 px-10 flex flex-col md:items-center'>
                <div className='flex flex-col sm:flex-row flex-wrap mx-auto gap-20 md:gap-28 justify-center'>
                    <FooterExplore />
                    <FooterServices />
                    <FooterContacts />
                </div>
                <Separator className='' />
                <FooterSocials />
            </footer>
        </>
    );
};

export default Footer;
