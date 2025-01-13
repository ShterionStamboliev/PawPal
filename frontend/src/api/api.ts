import { User } from '@/models/user';
import axios from 'axios';

const API = import.meta.env.VITE_BACKEND_API;

export const signUp = async (userData: User): Promise<void> => {
    return axios.post(`${API}/auth/signup`, userData);
};
