import { ContainerVariants } from '@/types/containerVariants';
import { ItemVariants } from '@/types/itemVariants';
import { AnimationControls, motion } from 'framer-motion';

type AboutTextProps = {
    controls: AnimationControls;
    containerVariants: ContainerVariants;
    itemVariants: ItemVariants;
};

const AboutText = ({
    controls,
    containerVariants,
    itemVariants,
}: AboutTextProps) => {
    return (
        <motion.div
            className='flex flex-col  space-y-4 px-10 md:space-y-6 max-w-2xl'
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
                className='text-base md:text-lg md:items-center md:justify-center font-manrope text-rose-950'
                variants={itemVariants}
            >
                PawPal is a specialized medical facility that deals with the
                prevention and treatment of animals of all types. We offer a
                wide range of professional services to meet the needs of our
                patients and be prepared for any emergency.
            </motion.p>
        </motion.div>
    );
};

export default AboutText;
