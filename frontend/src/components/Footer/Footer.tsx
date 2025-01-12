type FooterProps = {};

const Footer = ({}: FooterProps) => {
    return (
        <footer className='w-full bg-gray-800 text-white py-20'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <div className='footer-logo'>
                        <a href='/'>
                            <img src='/images/logo.png' alt='Logo' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
