import dogWithBone from '@/assets/dog-with-bone.png';
import dogWithFood from '@/assets/dog-with-food.png';
import dogGrooming from '@/assets/dog-grooming.png';
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

type PetService = {
    name: string;
    image: string;
    description?: string;
    text?: string;
};

const petServices: PetService[] = [
    {
        name: 'Dental Care',
        image: dogWithBone as string,
        description:
            "Maintaining your pet's oral hygiene is crucial for their overall health. Our dental care services include teeth cleaning, polishing, and treatment for gum diseases to keep their smiles healthy and bright.",
    },
    {
        name: 'Nutrition',
        image: dogWithFood as string,
        description:
            "A balanced diet is the foundation of your pet's health and well-being. Our nutrition counseling helps you choose the right food and feeding plans tailored to your pet's age, breed, and lifestyle.",
    },
    {
        name: 'Grooming',
        image: dogGrooming as string,
        description:
            'Regular grooming keeps your pet looking and feeling their best. Grooming also helps detect skin conditions early, ensuring a healthy coat and skin.',
    },
];

type ServicesCarouselProps = { plugin: React.MutableRefObject<AutoplayType> };

/**
 * 
    sm	640px	@media (min-width: 640px) { ... }
    md	768px	@media (min-width: 768px) { ... }
    lg	1024px	@media (min-width: 1024px) { ... }
    xl	1280px	@media (min-width: 1280px) { ... }
    2xl	1536px	@media (min-width: 1536px) { ... } 
 * 
 */

const ServicesCarousel = ({ plugin }: ServicesCarouselProps) => {
    return (
        <Carousel
            plugins={[plugin.current]}
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
            opts={{
                align: 'center',
            }}
            orientation='horizontal'
            className='w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl pb-8'
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
    );
};

export default ServicesCarousel;
