import { Veterinarian } from '@/types/veterinarian';
import { Card, CardContent } from '../ui/card';

type TeamCarouselCardProps = {
    vet: Veterinarian;
};

const TeamCarouselCard = ({ vet }: TeamCarouselCardProps) => {
    return (
        <div className='flex mx-4 lg:mb-10 items-start justify-center flex-wrap gap-4'>
            <div className='w-full max-w-md mx-auto relative pt-6'>
                <Card className='overflow-hidden group border-none'>
                    <CardContent className='p-0 relative aspect-square'>
                        <img
                            src={vet.image}
                            alt={vet.name}
                            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                        />
                    </CardContent>
                </Card>
                <div className='absolute top-0 left-4 right-4 z-10'>
                    <div className='bg-rose-700/80 max-w-[10rem] p-4 rounded-lg shadow-lg'>
                        <h2 className='text-xl sm:text-xl font-bold font-manrope text-white'>
                            {vet.name}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCarouselCard;
