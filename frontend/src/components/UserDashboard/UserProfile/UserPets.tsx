import { useGetUserData } from '@/hooks/queries/user/useQueryHook';

const UserPets = () => {
    const { data: userData, isPending } = useGetUserData();

    if (isPending) {
        return <p>Loading...</p>;
    }

    return (
        <div className='rounded-lg bg-white border-white shadow-[_0px_5px_10px_1px_rgba(0,0,0,0.3)]'>
            {userData?.pets.length === 0 ? (
                <span>You don't have any pets.</span>
            ) : (
                <span>
                    {userData?.pets.map((pet: any) => (
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
