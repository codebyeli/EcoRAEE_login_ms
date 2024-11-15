import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
export type LoginDocument = Login & Document;

@Schema({ timestamps: true })
export class Login {
  @Prop({ required: true })
  username: string;
  @Prop({ required: true })
  password: string;
}

export const LoginSchema = SchemaFactory.createForClass(Login);