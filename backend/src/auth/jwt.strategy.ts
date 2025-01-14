import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Model } from 'mongoose';
import { Strategy } from 'passport-jwt';
import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
    ) {
        super({
            jwtFromRequest: (req: Request) => req.cookies?.token,
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(payload) {
        const { id } = payload;

        const user = await this.userModel.findById(id);

        if (!user) {
            throw new UnauthorizedException('Unauthorized access.');
        }

        return user;
    }
}
