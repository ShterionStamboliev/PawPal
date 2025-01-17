import { z } from 'zod';

export const UserSchema = z.object({
    firstName: z.string().min(3, {
        message: 'First name must be 3 or more characters long',
    }),
    lastName: z.string().min(3, {
        message: 'Last name must be 3 or more characters long',
    }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(6, { message: 'Password must be 6 or more characters long' }),
    address: z.object({
        city: z.string().min(3, {
            message: 'City must be 3 or more characters long',
        }),
        phone: z.union([
            z.coerce.number().min(10, {
                message: 'Phone must be 10 or more characters long',
            }),
            z.literal(''),
        ]),
    }),
});

export const UserLoginSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(6, { message: 'Password must be 6 or more characters long' }),
});

export const UserLoginDefaults: z.infer<typeof UserLoginSchema> = {
    email: '',
    password: '',
};

export const UserRegisterDefaults: z.infer<typeof UserSchema> = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: {
        city: '',
        phone: '',
    },
};

export type User = z.infer<typeof UserSchema>;
export type UserLogin = z.infer<typeof UserLoginSchema>;
