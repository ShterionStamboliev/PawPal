import About from '@/components/About/About';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';

const Homepage = () => {
    return (
        <>
            <Header />
            <main className='mt-24'>
                <Hero />
                <Services />
                <About />
            </main>
        </>
    );
};

export default Homepage;
