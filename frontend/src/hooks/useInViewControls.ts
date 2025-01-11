import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';

const useInViewControls = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    return { ref, controls };
};

export default useInViewControls;
