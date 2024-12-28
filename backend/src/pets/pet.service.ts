import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Pet } from './schemas/pet.schema';

@Injectable()
export class PetService {
    constructor(
        @InjectModel(Pet.name)
        private petModel: mongoose.Model<Pet>,
    ) {}

    async findAll(): Promise<Pet[]> {
        const pets = await this.petModel.find();
        return pets;
    }

    async create(pet: Pet): Promise<Pet> {
        const result = await this.petModel.create(pet);
        return result;
    }
}
