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

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getAllUsers(): Promise<User[]> {
        return await this.userService.getAllUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<User> {
        return await this.userService.getUserById(id);
    }

    @Post('create')
    async createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);
    }

    @Put(':id')
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
