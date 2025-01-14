import { useState } from 'react';

export const useDialogState = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return {
        isOpen,
        setIsOpen,
    };
};

export const useModalState = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(true);

    return {
        isSignUp,
        setIsSignUp,
    };
};
