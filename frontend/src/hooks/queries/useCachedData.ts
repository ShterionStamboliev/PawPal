import { Pet } from '@/types/pet';
import { QueryKey, useQuery } from '@tanstack/react-query';

export type UserCachedData = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    pets: Pet[];
};

export const useCachedData = <TData>(
    queryKey: QueryKey,
    selectFn: (data: UserCachedData) => TData | undefined,
) => {
    const { data } = useQuery({
        queryKey,
        select: (data: UserCachedData) => {
            if (!data) {
                return undefined;
            }
            return selectFn(data);
        },
    });
    return data;
};
