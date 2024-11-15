import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDocument } from './schema/login.schema';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel('Login') private readonly loginModel: Model<LoginDocument>,
  ) {}

  create(createLoginDto: CreateLoginDto) {
    return this.loginModel.create(createLoginDto);
  }

  findAll() {
    return this.loginModel.find();
  }

  findOne(id: string) {
    return this.loginModel.findById(id);
  }

  update(id: string, updateLoginDto: UpdateLoginDto) {
    return this.loginModel.findByIdAndUpdate(id, updateLoginDto);
  }

  remove(id: string) {
    return this.loginModel.findByIdAndDelete(id);
  }
}
