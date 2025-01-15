import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signUp.dto';
import { SignInDto } from './dto/signIn.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    async signUp(
        @Body() signUpDto: SignUpDto,
        @Res() res: Response,
    ): Promise<void> {
        const message = await this.authService.signUp(signUpDto, res);
        res.status(201).json(message);
    }

    @Post('signin')
    async signIn(
        @Body() signInDto: SignInDto,
        @Res() res: Response,
    ): Promise<void> {
        const message = await this.authService.signIn(signInDto, res);
        res.status(200).json(message);
    }

    @Post('signout') async signOut(@Res() res: Response): Promise<void> {
        const message = await this.authService.signOut(res);
        res.status(200).json(message);
    }
}
