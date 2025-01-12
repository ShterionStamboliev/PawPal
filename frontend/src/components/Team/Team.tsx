import { containerVariants } from '@/constants/containerVariants';
import { itemVariants } from '@/constants/itemVariants';
import useInViewControls from '@/hooks/useInViewControls';
import TeamHeader from './TeamHeader';
import TeamText from './TeamText';
import useAutoplayPlugin from '@/hooks/useAutoplayPlugin';
import TeamCarousel from './TeamCarousel';

const Team = () => {
    const { ref, controls } = useInViewControls();
    const plugin = useAutoplayPlugin();

    return (
        <section
            ref={ref}
            className='flex flex-col rounded-lg mb-10 bg-rose-200 mx-10 sm:min-h-[35rem] items-center justify-center'
        >
            <TeamHeader
                controls={controls}
                containerVariants={containerVariants}
                itemVariants={itemVariants}
            />
            <div className='container flex flex-col xl:flex-row items-center md:items-start gap-8 md:gap-12'>
                <TeamText
                    controls={controls}
                    containerVariants={containerVariants}
                    itemVariants={itemVariants}
                />
                <TeamCarousel plugin={plugin} />
            </div>
        </section>
    );
};

export default Team;
