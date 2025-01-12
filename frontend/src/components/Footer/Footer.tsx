import { Separator } from '../ui/separator';
import FooterExplore from './FooterExplore';
import FooterServices from './FooterServices';

const Footer = () => {
    return (
        <footer className='w-full bg-rose-400 text-white gap-10 py-16 px-10 flex flex-col md:flex-row justify-between items-center'>
            <div className='flex flex-wrap mx-auto gap-20 md:gap-20 justify-center'>
                <FooterExplore />
                <FooterServices />
                <h2>Contacts</h2>
            </div>
            <Separator className='md:w-1/2' />
        </footer>
    );
};

export default Footer;
