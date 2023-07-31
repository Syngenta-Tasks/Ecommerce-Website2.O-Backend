
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { Body, Controller, Post } from '@nestjs/common';

import { UserService } from '../services/user.service';
import { UserRegisterRequestDto } from '../dto/user-registration.req.dto';
import { SETTINGS } from 'src/auth.util';
import { User } from '../entity/user.entity';

import { UpdateUserDto } from '../dto/update-user.dto';



@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async doUserRegistration(
    @Body(SETTINGS.VALIDATION_PIPE)
    userRegister: UserRegisterRequestDto,
  ): Promise<User> {
    return await this.userService.doUserRegistration(userRegister);
  }


  @Get('/')
  getAllUser() {
    return this.userService.getAllUser();
  }


}
