import { Separator } from '../ui/separator';
import vetImage from '@/assets/vet-image.png';

const About = () => {
    return (
        <section className='flex flex-col items-center justify-center mx-10 mb-8'>
            <div className='my-8 flex sm:items-center sm:justify-center w-full max-w-6xl'>
                <h2 className='font-chewy capitalize text-rose-800 font-semibold text-3xl whitespace-nowrap'>
                    About Us
                </h2>
                <div className='w-[20rem] ml-4 self-center'>
                    <Separator className='bg-rose-600/50' />
                </div>
            </div>
            <div className='container flex flex-col xl:flex-row items-center md:items-start gap-8 md:gap-12'>
                <div className='flex flex-col space-y-4 md:space-y-6 max-w-2xl'>
                    <h3 className='font-manrope text-3xl md:text-4xl text-rose-600 font-semibold'>
                        About PawPal
                    </h3>
                    <p className='text-base md:text-lg font-manrope text-rose-950'>
                        PawPal is a specialized medical facility that deals with
                        the prevention and treatment of animals of all types. We
                        offer a wide range of professional services to meet the
                        needs of our patients and be prepared for any emergency.
                    </p>
                </div>
                <div className='w-full md:w-auto lg:max-w-[40rem]'>
                    <img
                        src={vetImage}
                        alt='Dog with bone'
                        className='rounded-lg w-full h-auto object-cover'
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
