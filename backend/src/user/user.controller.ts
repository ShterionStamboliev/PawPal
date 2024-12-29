import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Get('/api/users')
    async getAllUsers(): Promise<User[]> {
        return await this.userService.getAllUsers();
    }

    @Get('/api/users/:id')
    async getUserById(@Param('id') id: string): Promise<User> {
        return await this.userService.getUserById(id);
    }

    @Post('/api/users/create')
    async createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);
    }

    @Put('/api/user/:id')
    async updateUser(
        @Param('id') id: string,
        @Body(ValidationPipe) updateUserDto: UpdateUserDto,
    ): Promise<User> {
        return await this.userService.updateUserById(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return await this.userService.deleteUserById(id);
    }
}
