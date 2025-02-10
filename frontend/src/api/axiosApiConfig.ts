import { getCookie } from '@/helpers/cookieParser';
import axios from 'axios';

const API = import.meta.env.VITE_BACKEND_API;

export const axiosApi = axios.create({
    baseURL: API,
    withCredentials: true,
});

axiosApi.interceptors.request.use(
    (config) => {
        const token = getCookie();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);
