import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signUp.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService,
    ) {}

    async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
        const {
            firstName,
            lastName,
            email,
            address: { city, phone },
            password,
        } = signUpDto;

        console.log(firstName, lastName, email, city, phone, password);

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
        });

        const token = this.jwtService.sign({ id: user._id });

        return { token };
    }
}
