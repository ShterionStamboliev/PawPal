import { Separator } from '../ui/separator';
import Autoplay from 'embla-carousel-autoplay';
import ServicesCarousel from './ServicesCarousel';
import { useRef } from 'react';

const OurServices = () => {
    const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

    return (
        <section className='flex flex-col items-center justify-center bg-orange-200/50'>
            <div className='my-8 flex items-center justify-center w-full max-w-6xl'>
                <h2 className='font-chewy capitalize text-red-300 font-semibold text-2xl whitespace-nowrap'>
                    Our services
                </h2>
                <div className='w-[20rem] ml-4'>
                    <Separator className='bg-red-200' />
                </div>
            </div>
            <ServicesCarousel plugin={plugin} />
        </section>
    );
};

export default OurServices;
