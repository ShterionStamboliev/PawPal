import { Pet } from '@/models/pet';
import { axiosApi } from './axiosApiConfig';

export const addNewPet = async (petData: Pet): Promise<void> => {
    const response = await axiosApi.post('/pets/create', petData);
    return response.data;
};
