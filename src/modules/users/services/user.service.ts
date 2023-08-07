import { Injectable } from '@nestjs/common';
import { UserRegisterRequestDto } from '../dto/user-registration.req.dto';
import { User } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async doUserRegistration(
    userRegister: UserRegisterRequestDto,
  ): Promise<User> {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(userRegister.password, salt);
    userRegister.password = password;
    return await this.userRepository.save(userRegister);
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  async create(data: any): Promise<User> {
    return this.userRepository.save(data);
  }

  async findOne(condition: any): Promise<User> {
    return this.userRepository.findOne(condition);
  }
  
  async update(id: number, data: any): Promise<any> {
    return this.userRepository.update(id, data);
  }
}



