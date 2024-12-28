import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pet } from './schemas/pet.schema';
import { CreatePetDto } from './dto/create-pet.dto';

@Injectable()
export class PetService {
    constructor(
        @InjectModel(Pet.name)
        private petModel: Model<Pet>,
    ) {}

    async create(createPetDto: CreatePetDto): Promise<Pet> {
        const createdPet = await this.petModel.create(createPetDto);
        return createdPet.save();
    }

    async findAll(): Promise<Pet[]> {
        return await this.petModel.find().exec();
    }
}
