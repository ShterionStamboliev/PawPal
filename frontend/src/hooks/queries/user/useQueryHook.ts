import { getUserData } from '@/api/userApi';
import { useAuth } from '@/context/AuthContext';
import { useQuery } from '@tanstack/react-query';

export const useGetUserData = () => {
    const { user } = useAuth();
    const userId = user?.sub;

    return useQuery({
        queryKey: ['userProfile'],
        queryFn: () => getUserData(userId!),
        enabled: !!userId,
        staleTime: 0,
        refetchInterval: false,
        refetchOnWindowFocus: false,
    });
};
