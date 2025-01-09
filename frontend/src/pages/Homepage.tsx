import About from '@/components/About/About';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import OurServices from '@/components/OurServices/OurServices';

const Homepage = () => {
    return (
        <>
            <Header />
            <main className='mt-24'>
                <Hero />
                <OurServices />
                <About />
            </main>
        </>
    );
};

export default Homepage;
