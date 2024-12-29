import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type PetDocument = HydratedDocument<Pet>;

@Schema({
    timestamps: true,
})
export class Pet {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    breed: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    owner: User;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
