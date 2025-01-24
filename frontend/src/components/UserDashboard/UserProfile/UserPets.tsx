import { useAuth } from '@/context/AuthContext';

type UserPetsProps = {};

const UserPets = ({}: UserPetsProps) => {
    const { user } = useAuth();

    return (
        <div className='rounded-lg bg-white border-white shadow-[_0px_5px_10px_1px_rgba(0,0,0,0.3)]'>
            {user?.pets.length === 0 ? (
                <span>You don't have any pets.</span>
            ) : (
                <span>{user?.pets.map((pet) => pet)}</span>
            )}
        </div>
    );
};

export default UserPets;
