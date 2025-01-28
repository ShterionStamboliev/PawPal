import { User, UserLogin } from '@/models/user';
import { UserData as UserDataObj } from '@/models/user';
import { axiosApi } from './axiosApiConfig';

type UserData = {
    user: {
        firstName: string;
        lastName: string;
        userEmail: string;
        token: string;
    };
};

type UserDataResponse = {
    data: UserData;
};

export const signUp = async (userData: User): Promise<void> => {
    return await axiosApi.post('/auth/signup', userData);
};

export const signIn = async (
    userData: UserLogin,
): Promise<UserDataResponse> => {
    return await axiosApi.post('/auth/signin', userData);
};

export const signOut = async (): Promise<void> => {
    return await axiosApi.post('/auth/signout');
};

export const getUserData = async (user_id: string): Promise<UserDataObj> => {
    const response = await axiosApi.get(`/users/${user_id}`);
    return response.data;
};
