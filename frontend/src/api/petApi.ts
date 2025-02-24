import { Pet } from '@/models/pet';
import { Pet as PetSchema } from '@/types/pet';
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

export const petImageUpload = async (
    petId: string,
    file: File,
): Promise<PetSchema> => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axiosApi.put(`/pets/upload/${petId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data.image;
};
