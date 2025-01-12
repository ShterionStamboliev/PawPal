import { Separator } from '../ui/separator';

type FooterProps = {};

const Footer = ({}: FooterProps) => {
    return (
        <footer className='w-full bg-gray-800 text-white gap-10 py-20 px-10 flex flex-col md:flex-row justify-between items-center'>
            <div className='flex flex-wrap gap-20 md:gap-20 justify-center'>
                <h2>Explore</h2>
                <h2>Services</h2>
                <h2>Contacts</h2>
            </div>
            <Separator className='md:w-1/2' />
        </footer>
    );
};

export default Footer;
