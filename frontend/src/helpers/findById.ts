import { UserCachedData } from '@/hooks/queries/useCachedData';
import { Pet } from '@/types/pet';

export const findDataById = <TData extends Pet>(
    data: UserCachedData,
    id: string,
    getId: (item: Pet) => string = (item) => item._id || '',
): TData | undefined => {
    if ('pets' in data && Array.isArray(data.pets)) {
        return data.pets.find((pet) => getId(pet as Pet) === id) as
            | TData
            | undefined;
    }
};
