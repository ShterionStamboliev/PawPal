import { Body, Controller, Get, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { Pet } from './schemas/pet.schema';
import { CreatePetDto } from './dto/create-pet.dto';

@Controller('api/pets')
export class PetController {
    constructor(private petService: PetService) {}

    @Get()
    async getAllPets(): Promise<Pet[]> {
        return this.petService.findAll();
    }

    @Post('api/create')
    async createPet(@Body() createPetDto: CreatePetDto): Promise<Pet> {
        return this.petService.create(createPetDto);
    }
}
