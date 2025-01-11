import useInViewControls from '@/hooks/useInViewControls';
import { Separator } from '../ui/separator';
import vetImage from '@/assets/vet-image.png';
import { motion } from 'framer-motion';
import { containerVariants } from '@/constants/containerVariants';
import { itemVariants } from '@/constants/itemVariants';
import { imageVariants } from '@/constants/imageVariants';

const About = () => {
    const { ref, controls } = useInViewControls();

    return (
        <section
            className='flex flex-col sm:min-h-[35rem] items-center justify-center mx-10 mb-8'
            ref={ref}
        >
            <motion.div
                className='my-8 flex sm:items-center sm:justify-center w-full max-w-6xl'
                initial='hidden'
                animate={controls}
                variants={containerVariants}
            >
                <motion.h2
                    className='font-chewy capitalize text-rose-800 font-semibold text-3xl whitespace-nowrap'
                    variants={itemVariants}
                >
                    About Us
                </motion.h2>
                <motion.div
                    className='w-[20rem] ml-4 self-center'
                    variants={itemVariants}
                >
                    <Separator className='bg-rose-600/50' />
                </motion.div>
            </motion.div>
            <div className='container flex flex-col xl:flex-row items-center md:items-start gap-8 md:gap-12'>
                <motion.div
                    className='flex flex-col space-y-4 md:space-y-6 max-w-2xl'
                    initial='hidden'
                    animate={controls}
                    variants={containerVariants}
                >
                    <motion.h3
                        className='font-manrope text-3xl md:text-4xl text-rose-600 font-semibold'
                        variants={itemVariants}
                    >
                        About PawPal
                    </motion.h3>
                    <motion.p
                        className='text-base md:text-lg font-manrope text-rose-950'
                        variants={itemVariants}
                    >
                        PawPal is a specialized medical facility that deals with
                        the prevention and treatment of animals of all types. We
                        offer a wide range of professional services to meet the
                        needs of our patients and be prepared for any emergency.
                    </motion.p>
                </motion.div>
                <motion.div
                    className='w-full md:w-auto lg:max-w-[35rem]'
                    initial='hidden'
                    animate={controls}
                    variants={imageVariants}
                >
                    <img
                        src={vetImage}
                        alt='Veterinarian with a dog'
                        width={600}
                        height={400}
                        className='rounded-lg w-full h-auto object-cover'
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
