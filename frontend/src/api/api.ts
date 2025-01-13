import { User } from '@/models/user';
import axios from 'axios';

export const signUp = async (userData: User): Promise<void> => {
    return axios.post('/signup', userData);
};
