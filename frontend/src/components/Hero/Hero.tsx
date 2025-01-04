import dog from '@/assets/happy-dog.png';

const Hero = () => {
    return (
        <section className='bg-yellow-50 w-[100vw]'>
            <div className='flex flex-col md:flex-row mx-auto px-4 items-center justify-between gap-2'>
                <div className='text-center max-w-1xl'>
                    <h1 className='font-manrope tracking-wider font-bold text-5xl leading-relaxed'>
                        For{' '}
                        <span className='font-chewy text-red-400'>
                            pawsitively
                        </span>{' '}
                        happy pets, trust{' '}
                        <span className='font-chewy text-red-400'>
                            PawPal.{' '}
                        </span>
                        Your pet's best friend 🐾
                    </h1>
                </div>
                <div className='flex-shrink-0 w-full md:w-1/2'>
                    <img
                        src={dog}
                        alt='Dog'
                        className='w-full md:max-w-full rounded-lg md:rotate-2'
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
