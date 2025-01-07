import dog from '@/assets/happy-dog.png';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { MessagesSquare } from 'lucide-react';

/**
 * 
    sm	640px	@media (min-width: 640px) { ... }
    md	768px	@media (min-width: 768px) { ... }
    lg	1024px	@media (min-width: 1024px) { ... }
    xl	1280px	@media (min-width: 1280px) { ... }
    2xl	1536px	@media (min-width: 1536px) { ... } 
 * 
 */

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='min-h-[550px] sm:min-h-[600px] flex justify-center items-center pt-4 bg-no-repeat bg-cover bg-center relative'
            style={{ backgroundImage: `url(${dog})` }}
        >
            <div className='absolute inset-0 bg-black/25 backdrop-blur-sm'></div>
            <div className='container relative z-10'>
                <div className='flex flex-col mx-6 mb-6 sm:m-0 xl:max-w-3xl justify-center text-center xl:text-left rounded-lg gap-10 p-10 text-white border-2 bg-gray-600/30 backdrop-blur-sm border-red-400'>
                    <h1 className='text-5xl tracking-wide leading-tight font-bold font-manrope'>
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
                    <p className='text-2xl tracking-wide leading-tight font-manrope'>
                        We provide the best medical treatment, examination,
                        grooming, and general health care of your pets.
                    </p>
                    <div>
                        <Button className='bg-red-400 p-8 text-lg font-semibold font-manrope hover:bg-red-400/70'>
                            Contact Us
                            <MessagesSquare
                                size={64}
                                className='inline-block ml-2'
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
