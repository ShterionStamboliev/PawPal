import { getUserData } from '@/api/api';
import { useAuth } from '@/context/AuthContext';
import { useQuery } from '@tanstack/react-query';

export const useGetUserData = () => {
    const { user } = useAuth();
    const userId = user?.sub;

    return useQuery({
        queryKey: ['userProfile', userId],
        queryFn: () => getUserData(userId!),
        enabled: !!userId,
        staleTime: 0,
        refetchInterval: false,
        refetchOnWindowFocus: false,
    });
};
