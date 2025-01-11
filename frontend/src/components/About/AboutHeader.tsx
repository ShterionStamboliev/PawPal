import { ContainerVariants } from '@/types/containerVariants';
import { AnimationControls, motion } from 'framer-motion';
import { Separator } from '../ui/separator';
import { ItemVariants } from '@/types/itemVariants';

type AboutHeaderProps = {
    controls: AnimationControls;
    containerVariants: ContainerVariants;
    itemVariants: ItemVariants;
};

const AboutHeader = ({
    controls,
    containerVariants,
    itemVariants,
}: AboutHeaderProps) => {
    return (
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
    );
};

export default AboutHeader;
