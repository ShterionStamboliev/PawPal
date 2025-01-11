import { ItemVariants } from '@/types/itemVariants';

export const itemVariants: ItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: 'easeOut', delay: 0.5 },
    },
};
