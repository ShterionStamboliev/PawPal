import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Team from '@/components/Team/Team';

const Homepage = () => {
    return (
        <div className='min-h-screen flex flex-col overflow-x-hidden'>
            <Header />
            <main className='mt-24 flex-grow'>
                <Hero />
                <Services />
                <About />
                <Team />
            </main>
            <Footer />
        </div>
    );
};

export default Homepage;
