import useInViewControls from '@/hooks/useInViewControls';
import { containerVariants } from '@/constants/containerVariants';
import { itemVariants } from '@/constants/itemVariants';
import { imageVariants } from '@/constants/imageVariants';
import AboutHeader from './AboutHeader';
import AboutText from './AboutText';
import AboutImage from './AboutImage';

const About = () => {
    const { ref, controls } = useInViewControls();

    return (
        <section
            className='flex flex-col bg-rose-200/50 rounded-lg sm:min-h-[35rem] items-center justify-center mx-10 my-10'
            ref={ref}
        >
            <AboutHeader
                controls={controls}
                containerVariants={containerVariants}
                itemVariants={itemVariants}
            />
            <div className='container flex flex-col xl:flex-row items-start gap-8 md:gap-12'>
                <AboutText
                    controls={controls}
                    containerVariants={containerVariants}
                    itemVariants={itemVariants}
                />
                <AboutImage controls={controls} imageVariants={imageVariants} />
            </div>
        </section>
    );
};

export default About;
