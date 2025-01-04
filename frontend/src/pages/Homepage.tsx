import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';

const Homepage = () => {
    return (
        <>
            <Header />
            <main className='mt-20 pt-2 flex flex-col items-center justify-center'>
                <Hero />
            </main>
        </>
    );
};

export default Homepage;
