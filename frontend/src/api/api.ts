import { User, UserLogin } from '@/models/user';
import axios from 'axios';

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

const API = import.meta.env.VITE_BACKEND_API;

const axiosApi = axios.create({
    baseURL: API,
    withCredentials: true,
});

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
