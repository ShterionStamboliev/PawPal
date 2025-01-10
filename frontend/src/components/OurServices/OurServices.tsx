import { Separator } from '../ui/separator';
import Autoplay from 'embla-carousel-autoplay';
import ServicesCarousel from './ServicesCarousel';
import { useRef } from 'react';

const OurServices = () => {
    const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

    return (
        <section className='flex flex-col items-center justify-center bg-rose-200'>
            <div className='my-8 flex items-center justify-center w-full max-w-6xl'>
                <h2 className='font-chewy capitalize text-rose-800 font-semibold ml-10 text-3xl whitespace-nowrap'>
                    Our services
                </h2>
                <div className='w-[20rem] ml-4'>
                    <Separator className='bg-rose-600/50' />
                </div>
            </div>
            <ServicesCarousel plugin={plugin} />
        </section>
    );
};

export default OurServices;
