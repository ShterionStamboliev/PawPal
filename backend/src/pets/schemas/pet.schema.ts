import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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
}

export const PetSchema = SchemaFactory.createForClass(Pet);
