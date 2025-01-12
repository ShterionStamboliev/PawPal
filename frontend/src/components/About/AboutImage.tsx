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
            className='w-full md:w-auto lg:max-w-[35rem] mb-10'
            initial='hidden'
            animate={controls}
            variants={imageVariants}
        >
            <img
                src={vetImage}
                alt='Veterinarian with a dog'
                className='rounded-lg aspect-square w-full h-auto object-cover'
            />
        </motion.div>
    );
};

export default AboutImage;
