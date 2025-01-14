import { User, UserLogin } from '@/models/user';
import axios from 'axios';

const API = import.meta.env.VITE_BACKEND_API;

const axiosApi = axios.create({
    baseURL: API,
    withCredentials: true,
});

export const signUp = async (userData: User): Promise<void> => {
    return axiosApi.post('/auth/signup', userData);
};

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

export const signIn = async (
    userData: UserLogin,
): Promise<UserDataResponse> => {
    return axiosApi.post('/auth/signin', userData);
};
