import dog from '@/assets/happy-dog.png';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const Hero = () => {
    return (
        <section className='min-h-[550px] sm:min-h-[600px] bg-yellow-50 flex justify-center items-center pt-4'>
            <div className='container pb-8 sm:pb-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    {/* text */}
                    <div className='flex flex-col justify-center text-center sm:text-left gap-10 p-8'>
                        <h1 className='text-8xl tracking-wide leading-tight font-bold font-manrope'>
                            For{' '}
                            <span className='font-chewy text-red-400'>
                                pawsitively
                            </span>{' '}
                            happy pets, trust{' '}
                            <span className='font-chewy text-red-400'>
                                PawPal.{' '}
                            </span>
                            Your pet's best friend
                        </h1>
                        <p className='text-4xl tracking-wide leading-tight font-manrope'>
                            We provide the best medical treatment, examination,
                            grooming and general health care of your pets.
                        </p>
                        <div>
                            <Button className='bg-red-400 p-8 text-lg font-semibold font-manrope hover:bg-red-300'>
                                Try our best foods now
                            </Button>
                        </div>
                    </div>
                    {/* image */}
                    <div className='min-h-[550px] flex justify-center items-center relative order-1 sm:order-2'>
                        <motion.img
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            src={dog}
                            alt='Dog'
                            className='max-w-2xl rounded-full w-full mx-auto sm:scale-125'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

/* 
        // <section className='bg-yellow-50 w-[100vw]'>
        //     <div className='flex flex-col lg:flex-row mx-auto py-4 justify-between'>
        //         <div className='text-wrap md:text-left px-8 md:p-12 pb-4'>
        //             <h1 className='font-manrope tracking-wider font-bold text-5xl leading-relaxed'>
        //                 For{' '}
        //                 <span className='font-chewy text-red-400'>
        //                     pawsitively
        //                 </span>{' '}
        //                 happy pets, trust{' '}
        //                 <span className='font-chewy text-red-400'>
        //                     PawPal.{' '}
        //                 </span>
        //                 Your pet's best friend
        //             </h1>
        //             <h2 className='font-manrope text-2xl md:w-2/3 mt-4'>
        //                 We provide the best medical treatment, examination,
        //                 grooming and general health care of your pets.
        //             </h2>
        //             <Button className='bg-red-400 mt-16 p-8 text-lg font-semibold font-manrope hover:bg-red-300'>
        //                 Try our best foods now
        //             </Button>
        //         </div>
        //         <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                src={dog}
                alt='Dog'
                className='pointer-events-none select-none object-cover'
            />
        //     </div>
        // </section>
*/
