import { Type } from 'class-transformer';
import {
    IsEmail,
    IsNotEmpty,
    IsObject,
    IsOptional,
    IsString,
    MinLength,
    ValidateNested,
} from 'class-validator';
import { AddressDto } from 'src/user/dto/create-user.dto';

export class SignUpDto {
    @IsString({ message: 'First name must be text' })
    @IsNotEmpty({ message: 'First name is required' })
    readonly firstName: string;

    @IsString({ message: 'Last name must be text' })
    @IsNotEmpty({ message: 'Last name is required' })
    readonly lastName: string;

    @IsEmail()
    @IsNotEmpty({ message: 'Email is required' })
    readonly email: string;

    @IsString()
    @IsNotEmpty({ message: 'Password is required' })
    @MinLength(6, { message: 'Password must be at least 6 characters' })
    readonly password: string;

    @IsObject()
    @ValidateNested()
    @Type(() => AddressDto)
    readonly address: AddressDto;

    @IsOptional()
    readonly role: string[];
}
