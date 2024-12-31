import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { PetService } from './pet.service';
import { Pet } from './schemas/pet.schema';
import { CreatePetDto } from './dto/create-pet.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('pets')
export class PetController {
    constructor(private petService: PetService) {}

    @Get()
    @Roles(Role.User, Role.Admin, Role.Moderator)
    @UseGuards(AuthGuard(), RolesGuard)
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
