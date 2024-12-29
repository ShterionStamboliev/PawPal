// import { Type } from 'class-transformer';
// import {
//     IsArray,
//     IsEmail,
//     IsNotEmpty,
//     IsNumber,
//     IsObject,
//     IsString,
//     ValidateNested,
// } from 'class-validator';
// import { CreateUserDto } from './create-user.dto';

import { CreateUserDto } from './create-user.dto';

// export class UpdateUserDto {
//         @IsString({ message: 'First name must be text' })
//         @IsNotEmpty({ message: 'First name is required' })
//     readonly firstName: string;
//     readonly lastName: string;
//     readonly email: string;
//     readonly pets: string[];
//     readonly address: {
//         city: string;
//         phone: number;
//     };
// }

export class UpdateUserDto extends CreateUserDto {}
