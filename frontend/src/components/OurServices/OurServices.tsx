import { Separator } from '../ui/separator';
import ServicesCarousel from './ServicesCarousel';
import { motion } from 'framer-motion';
import useInViewControls from '@/hooks/useInViewControls';
import { containerVariants } from '@/constants/containerVariants';
import { itemVariants } from '@/constants/itemVariants';
import useAutoplayPlugin from '@/hooks/useAutoplayPlugin';

const OurServices = () => {
    const { ref, controls } = useInViewControls();
    const plugin = useAutoplayPlugin();

    return (
        <section
            ref={ref}
            className='flex flex-col sm:min-h-[35rem] items-center justify-center bg-rose-200'
        >
            <motion.div
                className='my-8 flex items-center justify-center mt-0 w-full max-w-6xl'
                initial='hidden'
                animate={controls}
                variants={containerVariants}
            >
                <motion.h2
                    className='font-chewy capitalize text-rose-800 font-semibold ml-10 text-3xl whitespace-nowrap'
                    variants={itemVariants}
                >
                    Our services
                </motion.h2>
                <motion.div className='w-[20rem] ml-4' variants={itemVariants}>
                    <Separator className='bg-rose-600/50' />
                </motion.div>
            </motion.div>
            <ServicesCarousel plugin={plugin} />
        </section>
    );
};

export default OurServices;
