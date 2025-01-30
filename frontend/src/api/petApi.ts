import { Pet } from '@/models/pet';

import { axiosApi } from './axiosApiConfig';

export const addNewPet = async (petData: Pet): Promise<void> => {
    const response = await axiosApi.post('/pets/create', petData);
    return response.data;
};

export const deletePet = async (petId: string): Promise<void> => {
    return await axiosApi.delete(`/pets/delete/${petId}`);
};

export const updatePet = async (petData: Pet, petId: string): Promise<void> => {
    return await axiosApi.put(`/pets/${petId}`, petData);
};
