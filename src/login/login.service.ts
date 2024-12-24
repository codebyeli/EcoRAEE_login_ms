import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccessLoginDto, CreateLoginDto, ForgotPasswordDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Login } from './schema/login.schema';

@Injectable()
export class LoginService {
  constructor(@InjectModel(Login.name) private loginModel: Model<Login>) {}

  async login(accessLoginDto: AccessLoginDto) {
    const { username, password } = accessLoginDto;
    return this.loginModel.findOne({ username, password }).exec();
  }

  async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    const { email, username, password } = forgotPasswordDto;
    return this.loginModel.findOneAndUpdate(
      { email, username },
      { password },
      { new: true }
    ).exec();
  }

  async create(createLoginDto: CreateLoginDto) {
    const createdLogin = new this.loginModel(createLoginDto);
    return createdLogin.save();
  }

  async findAll() {
    return this.loginModel.find().exec();
  }

  async findOne(id: string) {
    return this.loginModel.findById(id).exec();
  }

  async update(id: string, updateLoginDto: UpdateLoginDto) {
    return this.loginModel.findByIdAndUpdate(id, updateLoginDto, { new: true }).exec();
  }

  async remove(id: string) {
    return this.loginModel.findByIdAndDelete(id).exec();
  }
}