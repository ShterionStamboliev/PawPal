export type ContainerVariant = {
    opacity: number;
    transition?: {
        delayChildren?: number;
        staggerChildren?: number;
        delay?: number;
    };
};

export type ContainerVariants = {
    hidden: ContainerVariant;
    visible: ContainerVariant;
};
