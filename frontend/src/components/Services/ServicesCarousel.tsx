import { AutoplayType } from 'embla-carousel-autoplay';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../ui/carousel';
import { motion } from 'framer-motion';
import useInViewControls from '@/hooks/useInViewControls';
import { petServices } from '@/constants/petServices';
import { servicesContainerVariants } from '@/constants/containerVariants';
import ServicesCarouselCard from './ServicesCarouselCard';

type ServicesCarouselProps = { plugin: React.MutableRefObject<AutoplayType> };

const ServicesCarousel = ({ plugin }: ServicesCarouselProps) => {
    const { ref, controls } = useInViewControls();

    return (
        <motion.div
            ref={ref}
            initial='hidden'
            animate={controls}
            variants={servicesContainerVariants}
        >
            <Carousel
                plugins={[plugin.current]}
                onMouseEnter={() => plugin.current.stop()}
                onMouseLeave={() => plugin.current.play()}
                opts={{
                    align: 'center',
                }}
                orientation='horizontal'
                className='w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mb-10 lg:mb-0'
            >
                <CarouselContent>
                    {petServices.map((service, index) => (
                        <CarouselItem
                            key={index}
                            className='sm:basis-1/2 md:basis-1/2 lg:basis-1/2 xl:basis-1/3'
                        >
                            <ServicesCarouselCard service={service} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className='hidden md:inline-flex' />
            </Carousel>
        </motion.div>
    );
};

export default ServicesCarousel;
