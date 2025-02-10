import { AnimationControls, motion } from 'framer-motion';
import vetImage from '@/assets/vet-image.png';
import { ItemVariants } from '@/types/itemVariants';

type AboutImageProps = {
    controls: AnimationControls;
    imageVariants: ItemVariants;
};

const AboutImage = ({ controls, imageVariants }: AboutImageProps) => {
    return (
        <motion.div
            className='flex w-full lg:items-center lg:justify-center px-4 mb-10'
            initial='hidden'
            animate={controls}
            variants={imageVariants}
        >
            <img
                src={vetImage}
                alt='Veterinarian with a dog'
                className='rounded-lg aspect-square lg:w-2/3 h-auto object-cover'
            />
        </motion.div>
    );
};

export default AboutImage;
