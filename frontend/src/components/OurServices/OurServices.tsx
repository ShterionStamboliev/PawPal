import React from 'react';
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
import { Separator } from '../ui/separator';
import Autoplay from 'embla-carousel-autoplay';

const OurServices = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true }),
    );

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
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className='sm:basis-1/3 md:basis-1/3 lg:basis-1/3'
                        >
                            <div className='p-1'>
                                <Card>
                                    <CardHeader className='p-0 space-y-0 relative'>
                                        <CardTitle className='text-2xl absolute top-4 left-4'>
                                            Echography
                                        </CardTitle>
                                        <CardDescription>
                                            <img
                                                src='https://via.placeholder.com/150'
                                                alt='Service'
                                                className='w-full h-32 rounded-t-md object-cover'
                                            />
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className='flex items-center justify-center p-6'>
                                        <span className='text-3xl font-semibold'>
                                            {index + 1}
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className='hidden md:inline-flex' />
            </Carousel>
        </section>
    );
};

export default OurServices;
