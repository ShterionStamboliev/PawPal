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
    );
};

export default AboutImage;
