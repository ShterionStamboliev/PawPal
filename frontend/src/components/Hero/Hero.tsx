import dog from '@/assets/happy-dog.png';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const Hero = () => {
    return (
        <section className='bg-yellow-50 w-[100vw]'>
            <div className='flex flex-col md:flex-row mx-auto py-4 justify-between'>
                <div className='text-center md:text-left px-8 md:px-12 pb-4 md:p-12'>
                    <h1 className='font-manrope md:w-2/3 tracking-wider font-bold text-5xl leading-relaxed'>
                        For{' '}
                        <span className='font-chewy text-red-400'>
                            pawsitively
                        </span>{' '}
                        happy pets, trust{' '}
                        <span className='font-chewy text-red-400'>
                            PawPal.{' '}
                        </span>
                        Your pet's best friend 🐾
                    </h1>
                    <h2 className='font-manrope text-2xl md:w-2/3 mt-4'>
                        We provide the best medical treatment, examination,
                        grooming and general health care of your pets.
                    </h2>
                    <Button className='bg-red-400 mt-10 p-8 text-lg font-semibold font-manrope hover:bg-red-300'>
                        Try our best foods now
                    </Button>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='flex-shrink-0 w-full px-4 md:px-0 md:pr-12 md:w-1/2'
                >
                    <img
                        src={dog}
                        alt='Dog'
                        className='w-full md:max-w-full rounded-lg'
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
