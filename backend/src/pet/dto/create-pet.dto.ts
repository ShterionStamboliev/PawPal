import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePetDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    age: string;

    @IsString()
    @IsNotEmpty()
    breed: string;
}
