import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { UserData } from '@/models/user';
import dog from '@/assets/dog-1.jpg';
import PrimaryButton from '@/common/PrimaryButton';
import { Pet } from '@/types/pet';

type UserPetsProps = {
    userData: UserData | undefined;
};

const UserPets = ({ userData }: UserPetsProps) => {
    return (
        <div className='rounded-lg overflow-hidden bg-white shadow-[_0px_5px_10px_1px_rgba(0,0,0,0.3)]'>
            {userData?.pets.length === 0 ? (
                <div className='h-40'>
                    <span>You don't have any added pets yet.</span>
                </div>
            ) : (
                <div className='flex flex-col gap-4 p-2 lg:flex-row 2xl:flex-row 2xl:items-start 2xl:justify-start items-center justify-center'>
                    {userData?.pets.map((pet: Pet) => (
                        <Card className='group border-none bg-gray-100 lg:w-2/4 max-w-xs shadow-none transition-shadow duration-200 hover:shadow-[_0px_5px_10px_1px_rgba(0,0,0,0.3)]'>
                            <div className='flex '>
                                <CardTitle className='flex justify-center'>
                                    <img
                                        src={dog}
                                        alt='Pet'
                                        className='object-cover rounded-t-xl'
                                    />
                                </CardTitle>
                            </div>
                            <CardContent className='p-0'>
                                <div className='p-2 rounded-lg opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                                    <h2 className='text-lg text-center sm:text-lg line-clamp-2 font-semibold mb-2'>
                                        {pet.name}
                                    </h2>
                                </div>
                                {/** TODO: Implement a View button to
                                 * show a modal with more pet details
                                 * such as name, age, vaccines etc. */}
                            </CardContent>
                            <PrimaryButton
                                className='w-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded-t-none mt-2'
                                onClick={() => console.log(pet._id)}
                            >
                                View
                            </PrimaryButton>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserPets;
