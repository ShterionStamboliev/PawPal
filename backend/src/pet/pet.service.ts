import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pet } from './schemas/pet.schema';
import { CreatePetDto } from './dto/create-pet.dto';
import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class PetService {
    constructor(
        @InjectModel(Pet.name)
        private petModel: Model<Pet>,
        @InjectModel(User.name)
        private userModel: Model<User>,
    ) {}

    async create(ownerId: string, createPetDto: CreatePetDto): Promise<Pet> {
        const owner = await this.userModel.findById(ownerId);

        if (!owner) {
            throw new HttpException('User not found', 404);
        }

        const createPet = new this.petModel(createPetDto);

        const savedPet = await createPet.save();
        console.log(savedPet);
        await owner.updateOne({
            $push: {
                pets: savedPet._id,
            },
        });

        return savedPet;
    }

    async findAll(): Promise<Pet[]> {
        return await this.petModel.find().exec();
    }
}
