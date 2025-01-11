import dog from '@/assets/happy-dog.png';
import { motion } from 'framer-motion';
import { MessagesSquare } from 'lucide-react';
import PrimaryButton from '@/common/PrimaryButton';
import HeroText from './HeroText';

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='min-h-[40rem] sm:min-h-[54rem] flex justify-center items-center pt-4 bg-no-repeat bg-cover bg-center relative'
            style={{ backgroundImage: `url(${dog})` }}
        >
            <div className='absolute inset-0 bg-black/25 backdrop-blur-sm'></div>
            <div className='container relative z-10'>
                <div className='flex flex-col sm:m-6 lg:m-0 mx-6 mb-6 xl:max-w-3xl justify-center text-center xl:text-left rounded-lg gap-10 p-10 text-white border-2 bg-rose-700/80 backdrop-blur-sm border-rose-600'>
                    <HeroText />
                    <div>
                        <PrimaryButton className='p-8 text-lg font-semibold'>
                            Contact Us
                            <MessagesSquare
                                size={64}
                                className='inline-block ml-2'
                            />
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
