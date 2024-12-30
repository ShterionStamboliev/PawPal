import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { PetService } from './pet.service';
import { Pet } from './schemas/pet.schema';
import { CreatePetDto } from './dto/create-pet.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('pets')
export class PetController {
    constructor(private petService: PetService) {}

    @Get()
    async getAllPets(): Promise<Pet[]> {
        return this.petService.findAll();
    }

    @Post('create')
    @UseGuards(AuthGuard())
    async createPet(
        @Req() req,
        @Body() createPetDto: CreatePetDto,
    ): Promise<Pet> {
        const owner = req.user.id;
        return this.petService.create(owner, createPetDto);
    }
}
