export type ItemVariant = {
    y?: number;
    x?: number;
    opacity: number;
    transition?: {
        duration?: number;
        ease?: string;
        delay?: number;
    };
};

export type ItemVariants = {
    hidden: ItemVariant;
    visible: ItemVariant;
};
