import { Separator } from '../ui/separator';

const About = () => {
    return (
        <section className='flex flex-col items-center justify-center bg-orange-200/50'>
            <div className='my-8 flex items-center justify-center w-full max-w-6xl'>
                <h2 className='font-chewy capitalize text-red-300 font-semibold text-2xl whitespace-nowrap'>
                    About us
                </h2>
                <div className='w-[20rem] ml-4'>
                    <Separator className='bg-red-200' />
                </div>
            </div>
        </section>
    );
};

export default About;
