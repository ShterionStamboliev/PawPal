import { User } from '@/models/user';

export interface UserData extends User {
    token: string;
}

export type UserDataResponse = {
    data: UserData;
};
