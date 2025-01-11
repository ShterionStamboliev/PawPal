import { ItemVariants } from '@/types/itemVariants';

export const imageVariants: ItemVariants = {
    hidden: { x: 80, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: 1, ease: 'easeOut' },
    },
};
