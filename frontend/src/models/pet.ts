import { z } from 'zod';

export const PetSchema = z.object({
    name: z.string().min(2, {
        message: 'Pet name must be 2 or more characters',
    }),
    age: z.string(),
    breed: z.string(),
    image: z.string().optional(),
});

export const PetCreateDefaults: z.infer<typeof PetSchema> = {
    name: '',
    age: '',
    breed: '',
    image: '',
};

export type Pet = z.infer<typeof PetSchema>;
