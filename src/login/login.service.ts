import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Login, LoginDocument } from './schema/login.schema';

@Injectable()
export class LoginService {
  constructor(@InjectModel(Login.name) private readonly loginModel: Model<LoginDocument>) {}

  async create(createLoginDto: CreateLoginDto) {
    return this.loginModel.create(createLoginDto);
  }

  async findAll() {
    return this.loginModel.find().exec();
  }

  async findOne(id: string) {
    const login = await this.loginModel.findById(id).exec();
    if (!login) {
      throw new NotFoundException(`Login with ID ${id} not found`);
    }
    return login;
  }

  async update(id: string, updateLoginDto: UpdateLoginDto) {
    const updatedLogin = await this.loginModel.findByIdAndUpdate(id, updateLoginDto, { new: true }).exec();
    if (!updatedLogin) {
      throw new NotFoundException(`Login with ID ${id} not found`);
    }
    return updatedLogin;
  }

  async remove(id: string) {
    const deletedLogin = await this.loginModel.findByIdAndDelete(id).exec();
    if (!deletedLogin) {
      throw new NotFoundException(`Login with ID ${id} not found`);
    }
    return deletedLogin;
  }

  async login(createLoginDto: CreateLoginDto): Promise<any> {
    const { username, password } = createLoginDto;
    const userFound = await this.loginModel.findOne({ username, password }).exec();
    console.log(userFound);
    if (!userFound || userFound === null) {
      return false
    } else {
      return userFound;
    }

  }
}