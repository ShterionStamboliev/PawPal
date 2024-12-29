import { Type } from 'class-transformer';
import {
    IsArray,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsObject,
    IsString,
    ValidateNested,
} from 'class-validator';

export class AddressDto {
    @IsString()
    @IsNotEmpty({ message: 'City is required' })
    city: string;

    @IsNumber()
    @IsNotEmpty({ message: 'Phone number is required' })
    phone: number;
}
export class CreateUserDto {
    @IsString({ message: 'First name must be text' })
    @IsNotEmpty({ message: 'First name is required' })
    readonly firstName: string;

    @IsString({ message: 'Last name must be text' })
    @IsNotEmpty({ message: 'Last name is required' })
    readonly lastName: string;

    @IsEmail()
    @IsNotEmpty({ message: 'Email is required' })
    readonly email: string;

    @IsArray()
    readonly pets: string[];

    @IsObject()
    @ValidateNested()
    @Type(() => AddressDto)
    readonly address: AddressDto;
}
