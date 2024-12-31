import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Role } from 'src/auth/enums/role.enum';
import { Pet } from 'src/pet/schemas/pet.schema';

export type UserDocument = HydratedDocument<User>;

@Schema({
    timestamps: true,
})
export class User {
    @Prop({ required: true, unique: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Pet' })
    pets: Pet[];

    @Prop({ type: Object })
    address: {
        city: string;
        phone: number;
    };

    @Prop({
        type: [{ type: String, enum: Role }],
        default: [Role.User],
    })
    role: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
