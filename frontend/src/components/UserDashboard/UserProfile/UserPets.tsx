import { Pet } from '@/models/pet';
import { UserData } from '@/models/user';

type UserPetsProps = {
    userData: UserData | undefined;
};

const UserPets = ({ userData }: UserPetsProps) => {
    return (
        <div className='rounded-lg bg-white border-white shadow-[_0px_5px_10px_1px_rgba(0,0,0,0.3)]'>
            {userData?.pets.length === 0 ? (
                <span>You don't have any pets.</span>
            ) : (
                <span>
                    {userData?.pets.map((pet: Pet) => (
                        <div key={pet._id}>
                            <div>Name: {pet.name}</div>
                            <div>Age: {pet.age}</div>
                            <div>Breed: {pet.breed}</div>
                        </div>
                    ))}
                </span>
            )}
        </div>
    );
};

export default UserPets;

{
    /**
                <Card className='w-full max-w-md mx-auto overflow-hidden group border-none'>
                <CardContent className='p-0 relative aspect-square'>
                    <img
                        src={service.image}
                        alt=''
                        className='w-full h-full object-fill transition-transform duration-300 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent' />
                    <div className='absolute inset-0 flex flex-col justify-end text-white rounded-lg p-4'>
                        <div className='bg-rose-700/80 p-2 rounded-lg mb-2'>
                            <h2 className='text-xl sm:text-2xl line-clamp-2 font-bold mb-2 font-manrope'>
                                {service.name}
                            </h2>
                            <p className='text-md font-manrope line-clamp-3 sm:line-clamp-3 overflow-hidden'>
                                {service.description}
                            </p>
                        </div>
                        <PrimaryButton
                            variant='ghost'
                            // onClick={onLearnMore}
                        >
                            Learn More
                        </PrimaryButton>
                    </div>
                </CardContent>
            </Card>
    
    */
}
