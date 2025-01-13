import { useState } from 'react';

export const useDialogState = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return {
        isOpen,
        setIsOpen,
    };
};
