export class CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    pets: string[];
    address: {
        city: string;
        phone: number;
    };
}
