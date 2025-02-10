import { ContainerVariants } from '@/types/containerVariants';
import { ItemVariants } from '@/types/itemVariants';
import { AnimationControls, motion } from 'framer-motion';
import { Separator } from '../ui/separator';

type TeamHeaderProps = {
    controls: AnimationControls;
    containerVariants: ContainerVariants;
    itemVariants: ItemVariants;
};

const TeamHeader = ({
    containerVariants,
    controls,
    itemVariants,
}: TeamHeaderProps) => {
    return (
        <motion.div
            className='my-8 flex px-10 md:items-center md:justify-center w-full max-w-6xl'
            initial='hidden'
            animate={controls}
            variants={containerVariants}
        >
            <motion.h2
                className='font-chewy capitalize text-rose-800 font-semibold text-3xl whitespace-nowrap'
                variants={itemVariants}
            >
                The Team
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

export default TeamHeader;
