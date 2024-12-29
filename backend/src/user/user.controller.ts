import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SkipThrottle, Throttle } from '@nestjs/throttler';
import { Query as ExpressQuery } from 'express-serve-static-core';

@SkipThrottle()
@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @SkipThrottle({ default: false })
    @Get()
    async getAllUsers(@Query() query: ExpressQuery): Promise<User[]> {
        return await this.userService.getAllUsers(query);
    }

    @Throttle({ short: { ttl: 1000, limit: 1 } })
    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<User> {
        return await this.userService.getUserById(id);
    }

    @Post('create')
    async createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);
    }

    @Throttle({ short: { ttl: 1000, limit: 1 } })
    @Put(':id')
    async updateUser(
        @Param('id') id: string,
        @Body(ValidationPipe) updateUserDto: UpdateUserDto,
    ): Promise<User> {
        return await this.userService.updateUserById(id, updateUserDto);
    }

    @Throttle({ short: { ttl: 1000, limit: 1 } })
    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return await this.userService.deleteUserById(id);
    }
}
