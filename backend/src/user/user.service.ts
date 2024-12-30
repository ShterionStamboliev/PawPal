import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { Query } from 'express-serve-static-core';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async getAllUsers(query: Query): Promise<User[]> {
        const resultsPerPage = 5;
        const currentPage = Number(query.page) || 1;
        const skip = resultsPerPage * (currentPage - 1);

        const querySearch = query.search
            ? {
                  firstName: {
                      $regex: query.search,
                      $options: 'i',
                  },
              }
            : {};

        const users = await this.userModel
            .find({ ...querySearch })
            .limit(resultsPerPage)
            .skip(skip)
            .populate(['pets'])
            .exec();

        if (!users || users.length === 0) {
            throw new NotFoundException('No users found.');
        }
        return users;
    }

    async getUserById(id: string): Promise<User> {
        const isValidId = mongoose.isValidObjectId(id);

        if (!isValidId) {
            throw new BadRequestException('Id not found.');
        }

        const user = await this.userModel.findById(id).populate(['pets']);

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
