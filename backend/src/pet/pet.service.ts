import {
    BadRequestException,
    HttpException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Pet } from './schemas/pet.schema';
import { CreatePetDto } from './dto/create-pet.dto';
import { User } from 'src/user/schemas/user.schema';
import { UpdatePetDto } from './dto/update-pet.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class PetService {
    constructor(
        @InjectModel(Pet.name)
        private petModel: Model<Pet>,
        @InjectModel(User.name)
        private userModel: Model<User>,
        private cloudinaryService: CloudinaryService,
    ) {}

    async createPet(ownerId: string, createPetDto: CreatePetDto): Promise<Pet> {
        const owner = await this.userModel.findById(ownerId);

        if (!owner) {
            throw new NotFoundException('User not found');
        }

        const createPet = new this.petModel(createPetDto);

        const savedPet = await createPet.save();

        await owner.updateOne({
            $push: {
                pets: savedPet._id,
            },
        });

        return savedPet;
    }

    async getAllPets(): Promise<Pet[]> {
        return await this.petModel.find().exec();
    }

    async getPetById(id: string): Promise<Pet> {
        const isValid = mongoose.isValidObjectId(id);

        if (!isValid) {
            throw new BadRequestException('Id not found.');
        }

        const pet = await this.petModel.findById(id);

        if (!pet) {
            throw new NotFoundException('Pet not found.');
        }

        return pet;
    }

    async updatePetById(id: string, pet: Partial<UpdatePetDto>): Promise<Pet> {
        const isValidId = mongoose.isValidObjectId(id);

        if (!isValidId) {
            throw new BadRequestException('Id not found.');
        }

        const updatedPet = await this.petModel.findByIdAndUpdate(id, pet, {
            new: true,
            runValidators: true,
        });

        if (!updatedPet) {
            throw new NotFoundException('Pet not found');
        }

        return updatedPet;
    }

    async deletePetById(id: string): Promise<Pet> {
        const pet = await this.petModel.findById(id);

        if (!pet) {
            throw new NotFoundException('Pet not found');
        }

        await this.userModel.updateOne(
            {
                pets: id,
            },
            {
                $pull: {
                    pets: id,
                },
            },
        );

        if (pet.image) {
            const publicId = pet.image.split('/').pop()?.split('.')[0];

            if (publicId) {
                await this.cloudinaryService.deleteFile(`pets/${publicId}`);
            }
        }

        const deletedPet = await this.petModel.findByIdAndDelete(id);
        if (!deletedPet) {
            throw new HttpException('Failed to delete the pet', 500);
        }

        return deletedPet;
    }
}
