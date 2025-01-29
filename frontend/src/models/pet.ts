import { z } from 'zod';

// const MAX_FILE_SIZE = 5 * 1024 * 1024;
// const ACCEPTED_IMAGE_TYPES = [
//     'image/jpeg',
//     'image/jpg',
//     'image/png',
//     'image/webp',
// ];

export const PetSchema = z.object({
    name: z.string().min(2, {
        message: 'Pet name must be 2 or more characters',
    }),
    age: z.union([
        z.coerce.number().min(1, {
            message: 'Age must be 1 or more characters long',
        }),
        z.literal(''),
    ]),
    breed: z.string().min(1, {
        message: 'Pet breed cannot be empty',
    }),
    image: z.string(),
});

export const PetCreateDefaults: z.infer<typeof PetSchema> = {
    name: '',
    age: '',
    breed: '',
    image: '',
};

export type Pet = z.infer<typeof PetSchema>;
