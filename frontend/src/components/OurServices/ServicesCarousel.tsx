import { AutoplayType } from 'embla-carousel-autoplay';
import { Card, CardContent } from '../ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../ui/carousel';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import useInViewControls from '@/hooks/useInViewControls';
import { petServices } from '@/constants/petServices';
import { servicesContainerVariants } from '@/constants/containerVariants';

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
                className='w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl'
            >
                <CarouselContent>
                    {petServices.map((service, index) => (
                        <CarouselItem
                            key={index}
                            className='sm:basis-1/2 md:basis-1/2 lg:basis-1/2 xl:basis-1/3'
                        >
                            <div className='flex mx-4 items-start justify-center flex-wrap gap-4'>
                                <Card className='w-full max-w-md mx-auto overflow-hidden group border-none'>
                                    <CardContent className='p-0 relative aspect-square'>
                                        <img
                                            src={service.image}
                                            alt=''
                                            className='w-full h-full object-fill transition-transform duration-300 group-hover:scale-105'
                                        />
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent' />
                                        <div className='absolute inset-0 flex flex-col justify-end text-white rounded-lg p-4'>
                                            <div className='bg-rose-700/80 p-2 rounded-lg mb-2'>
                                                <h2 className='text-xl sm:text-2xl line-clamp-2 font-bold mb-2 font-manrope'>
                                                    {service.name}
                                                </h2>
                                                <p className='text-md font-manrope line-clamp-3 sm:line-clamp-3 overflow-hidden'>
                                                    {service.description}
                                                </p>
                                            </div>
                                            <Button
                                                variant='ghost'
                                                // onClick={onLearnMore}
                                                className='w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-white font-semibold hover:text-white'
                                            >
                                                Learn More
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
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
