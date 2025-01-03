import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from './schemas/pet.schema';
import { AuthModule } from 'src/auth/auth.module';
import { User, UserSchema } from 'src/user/schemas/user.schema';
import { MulterModule } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
    imports: [
        AuthModule,
        MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }]),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MulterModule.register({
            limits: {
                fileSize: 5 * 1024 * 1024,
            },
        }),
    ],
    controllers: [PetController],
    providers: [PetService, CloudinaryService],
})
export class PetModule {}
