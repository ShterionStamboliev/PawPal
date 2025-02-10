import { ContainerVariants } from '@/types/containerVariants';
import { ItemVariants } from '@/types/itemVariants';
import { AnimationControls, motion } from 'framer-motion';

type TeamTextProps = {
    controls: AnimationControls;
    containerVariants: ContainerVariants;
    itemVariants: ItemVariants;
};

const TeamText = ({
    containerVariants,
    controls,
    itemVariants,
}: TeamTextProps) => {
    return (
        <motion.div
            className='flex flex-col md:items-center md:justify-center space-y-4 px-10 md:space-y-6 max-w-2xl'
            initial='hidden'
            animate={controls}
            variants={containerVariants}
        >
            <motion.h3
                className='font-manrope text-3xl md:text-4xl text-rose-600 font-semibold'
                variants={itemVariants}
            >
                Meet Our Heroes
            </motion.h3>
            <motion.p
                className='text-base md:text-lg font-manrope text-rose-950'
                variants={itemVariants}
            >
                Our dedicated team is here to provide compassionate care for
                your pets, ensuring they receive the attention and expertise
                they need to live healthier and happier lives.
            </motion.p>
        </motion.div>
    );
};

export default TeamText;
