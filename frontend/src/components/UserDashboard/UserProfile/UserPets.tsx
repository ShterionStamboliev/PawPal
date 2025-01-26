import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Pet } from '@/models/pet';
import { UserData } from '@/models/user';
import doc from '@/assets/doctor-2.jpg';

type UserPetsProps = {
    userData: UserData | undefined;
};

const UserPets = ({ userData }: UserPetsProps) => {
    return (
        <div className='rounded-lg overflow-hidden bg-white border-white shadow-[_0px_5px_10px_1px_rgba(0,0,0,0.3)]'>
            {userData?.pets.length === 0 ? (
                <span>You don't have any pets.</span>
            ) : (
                <div className='flex flex-col gap-4 p-2 lg:flex-row 2xl:flex-row 2xl:items-start 2xl:justify-start items-center justify-center'>
                    {userData?.pets.map((pet: Pet) => (
                        <Card className='max-w-md border-none shadow-none transition-shadow duration-200 hover:shadow-[_0px_5px_10px_1px_rgba(0,0,0,0.3)]'>
                            <div className='flex items-center justify-center'>
                                <CardTitle className='flex w-2/4'>
                                    <img
                                        src={doc}
                                        alt=''
                                        className='object-cover rounded-full'
                                    />
                                </CardTitle>
                            </div>
                            <CardContent className='p-0'>
                                <div className='p-2 rounded-lg'>
                                    <h2 className='text-lg text-center sm:text-lg line-clamp-2 font-semibold mb-2'>
                                        {pet.name}
                                    </h2>
                                </div>
                                {/** TODO: Implement a View button to
                                 * show a modal with more pet details
                                 * such as name, age, vaccines etc. */}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserPets;
