import { Separator } from '../ui/separator';
import Autoplay from 'embla-carousel-autoplay';
import ServicesCarousel from './ServicesCarousel';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const OurServices = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

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
