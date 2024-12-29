import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model, ObjectIdToString } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async getAllUsers(): Promise<User[]> {
        const users = await this.userModel.find().exec();
        return users;
    }

    async getUserById(id: string): Promise<User> {
        const user = await this.userModel.findById(id);

        if (!user) {
            throw new NotFoundException('User not found.');
        }
        return user;
    }

    async updateUserById(id: string, user: User): Promise<User> {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, user, {
            new: true,
            runValidators: true,
        });
        return updatedUser;
    }

    async deleteUserById(id: string): Promise<User> {
        const deletedUser = await this.userModel.findByIdAndDelete(id);
        return deletedUser;
    }
}
