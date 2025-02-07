import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Req,
    UploadedFile,
    UseGuards,
    UseInterceptors,
    ValidationPipe,
} from '@nestjs/common';
import { PetService } from './pet.service';
import { Pet } from './schemas/pet.schema';
import { CreatePetDto } from './dto/create-pet.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { UpdatePetDto } from './dto/update-pet.dto';
import { SkipThrottle, Throttle } from '@nestjs/throttler';

@Controller('pets')
export class PetController {
    constructor(
        private petService: PetService,
        private cloudinaryService: CloudinaryService,
    ) {}

    @Get()
    @SkipThrottle({ default: false })
    @Roles(Role.User, Role.Admin, Role.Moderator)
    @UseGuards(AuthGuard(), RolesGuard)
    async getAllPets(): Promise<Pet[]> {
        return this.petService.getAllPets();
    }

    @Post('create')
    @Roles(Role.User, Role.Admin)
    @UseGuards(AuthGuard())
    async createPet(@Body() createPetDto: CreatePetDto, @Req() req) {
        const owner = req.user._id;
        return await this.petService.createPet(owner, createPetDto);
    }

    @Put(':id')
    @Throttle({ short: { ttl: 1000, limit: 1 } })
    @Roles(Role.User)
    @UseGuards(AuthGuard(), RolesGuard)
    async updatePet(
        @Param('id') id: string,
        @Body(ValidationPipe) updatePetDto: UpdatePetDto,
    ): Promise<Pet> {
        return await this.petService.updatePetById(id, updatePetDto);
    }

    @Throttle({ short: { ttl: 1000, limit: 1 } })
    @Get(':id')
    @Roles(Role.User)
    @UseGuards(AuthGuard(), RolesGuard)
    async getPetById(@Param('id') id: string): Promise<Pet> {
        return await this.petService.getPetById(id);
    }

    @Put('upload/:id')
    @UseGuards(AuthGuard())
    @UseInterceptors(FileInterceptor('file'))
    async uploadImage(
        @Param('id') id: string,
        @UploadedFile() file: Express.Multer.File,
    ) {
        const uploadResult = await this.cloudinaryService.uploadFile(id, file);

        const updatedPet = await this.petService.updatePetById(id, {
            image: uploadResult.secure_url,
        });

        return updatedPet;
    }

    @Delete('delete/:id')
    @Roles(Role.User)
    @UseGuards(AuthGuard(), RolesGuard)
    async deletePet(@Param('id') id: string): Promise<Pet> {
        const deletedPet = await this.petService.deletePetById(id);
        return deletedPet;
    }
}
