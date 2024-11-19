import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
export type LoginDocument = Login & Document;

@Schema({ timestamps: true })
export class Login {
  @Prop()
  name: string;
  @Prop()
  lastName: string;
  @Prop()
  email: string;
  @Prop()
  birthday: string;
  @Prop({unique: true})
  username: string;
  @Prop()
  password: string;
}
export const LoginSchema = SchemaFactory.createForClass(Login);