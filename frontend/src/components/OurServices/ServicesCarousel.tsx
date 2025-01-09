import dogWithBone from '@/assets/dog-with-bone.png';
import dogWithFood from '@/assets/dog-with-food.png';
import dogGrooming from '@/assets/dog-grooming.png';
import { AutoplayType } from 'embla-carousel-autoplay';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card';
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
        description: 'Pet dental care',
        text: "Maintaining your pet's oral hygiene is crucial for their overall health. Our dental care services include teeth cleaning, polishing, and treatment for gum diseases to keep their smiles healthy and bright.",
    },
    {
        name: 'Nutrition',
        image: dogWithFood as string,
        description: 'Proper nutrition',
        text: "A balanced diet is the foundation of your pet's health and well-being. Our nutrition counseling helps you choose the right food and feeding plans tailored to your pet's age, breed, and lifestyle.",
    },
    {
        name: 'Grooming',
        image: dogGrooming as string,
        description: 'Grooming your pet',
        text: 'Regular grooming keeps your pet looking and feeling their best. Grooming also helps detect skin conditions early, ensuring a healthy coat and skin.',
    },
];

type ServicesCarouselProps = { plugin: React.MutableRefObject<AutoplayType> };

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
                        <div className='flex p-4 items-start justify-center flex-wrap gap-4'>
                            <Card className='border-none sm:max-w-[22rem]'>
                                {' '}
                                <CardHeader className='p-0 space-y-0 relative shadow-md'>
                                    <CardTitle className='text-2xl text-white/90 absolute top-4 left-4'>
                                        {service.name}
                                    </CardTitle>
                                    <CardDescription className='rounded-t-lg'>
                                        <img
                                            src={service.image}
                                            alt='Service'
                                            className='w-full h-64 rounded-t-md'
                                        />
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className='flex p-4 flex-col gap-4 justify-between rounded-b-lg bg-gray-200/50 h-[calc(100%-16rem)]'>
                                    {' '}
                                    <p className='text-lg tracking-wide  items-start font-manrope font-semibold'>
                                        {service.description}
                                    </p>
                                    <p className='text-gray-500/90 font-semibold line-clamp-4'>
                                        {' '}
                                        {service.text}
                                    </p>
                                    <Button className='bg-red-400 hover:bg-red-400/70 mt-auto'>
                                        <p className='text-bold font-manrope text-white'>
                                            Learn more
                                        </p>
                                    </Button>
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
