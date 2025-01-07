import { Card, CardContent } from '../ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../ui/carousel';

const OurServices = () => {
    return (
        <section className='flex flex-col items-center justify-center bg-orange-200/50'>
            <div className='my-8 font-manrope font-semibold text-2xl'>
                <h2>Our services</h2>
            </div>
            <Carousel
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
                            className='sm:basis-1/2 md:basis-1/2 lg:basis-1/3'
                        >
                            <div className='p-1'>
                                <Card>
                                    <CardContent className='flex aspect-square items-center justify-center p-6'>
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
