import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Team from '@/components/Team/Team';

const Homepage = () => {
    return (
        <>
            <Header />
            <main className='mt-24'>
                <Hero />
                <Services />
                <About />
                <Team />
                <Footer />
            </main>
        </>
    );
};

export default Homepage;
