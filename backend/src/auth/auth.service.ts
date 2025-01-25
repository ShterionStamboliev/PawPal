import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signUp.dto';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/signIn.dto';
import { Response } from 'express';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService,
    ) {}

    async signUp(
        signUpDto: SignUpDto,
        res: Response,
    ): Promise<{ message: string }> {
        const {
            firstName,
            lastName,
            email,
            address: { city, phone },
            password,
            role,
        } = signUpDto;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.userModel.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            address: {
                city,
                phone,
            },
            role,
        });

        const token = this.jwtService.sign({ id: user._id });

        res.cookie('token', token, {
            httpOnly: false,
            maxAge: 24 * 60 * 60 * 1000,
        });

        return { message: 'Registration successful' };
    }

    async signIn(
        signInDto: SignInDto,
        res: Response,
    ): Promise<{
        message: string;
        token: string;
    }> {
        const { email, password } = signInDto;

        const user = await this.userModel.findOne({ email });

        if (!user) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const token = this.jwtService.sign({
            sub: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            pets: user.pets,
            address: {
                city: user.address.city,
                phone: user.address.phone,
            },
            role: [...user.role],
        });

        res.cookie('token', token, {
            httpOnly: false,
            maxAge: 24 * 60 * 60 * 1000,
        });

        return {
            token,
            message: 'Login successful',
        };
    }

    async signOut(res: Response): Promise<{ message: string }> {
        res.clearCookie('token');
        return {
            message: 'Logout successful',
        };
    }
}
