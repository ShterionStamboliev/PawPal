import { z } from 'zod';

const User = z.object({
    firstName: z.string().min(3, {
        message: 'First name must be 3 or more characters long',
    }),
    lastName: z.string().min(3, {
        message: 'Last name must be 3 or more characters long',
    }),
    email: z.string().email({ message: 'Invalid email address' }),
    address: z.object({
        city: z.string().min(3, {
            message: 'City must be 3 or more characters long',
        }),
        phone: z.number().min(10, {
            message: 'Phone must be 10 or more characters long',
        }),
    }),
});

export type User = z.infer<typeof User>;
