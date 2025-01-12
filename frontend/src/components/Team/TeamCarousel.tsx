import { motion } from 'framer-motion';
import { AutoplayType } from 'embla-carousel-autoplay';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../ui/carousel';
import { servicesContainerVariants } from '@/constants/containerVariants';
import useInViewControls from '@/hooks/useInViewControls';
import { veterinarians } from '@/constants/veterinarians';
import TeamCarouselCard from './TeamCarouselCard';

type TeamCarouselProps = {
    plugin: React.MutableRefObject<AutoplayType>;
};

const TeamCarousel = ({ plugin }: TeamCarouselProps) => {
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
                    {veterinarians.map((vet, index) => (
                        <CarouselItem key={index} className=''>
                            <TeamCarouselCard vet={vet} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='hidden md:inline-flex md:left-10 lg:left-36 2xl:left-20' />
                <CarouselNext className='hidden md:inline-flex md:right-10 lg:right-36 2xl:right-20' />
            </Carousel>
        </motion.div>
    );
};

export default TeamCarousel;
