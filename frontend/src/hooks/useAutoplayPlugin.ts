import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const useAutoplayPlugin = () => {
    const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

    return plugin;
};

export default useAutoplayPlugin;
