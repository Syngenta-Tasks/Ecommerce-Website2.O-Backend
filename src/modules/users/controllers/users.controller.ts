import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserRegisterRequestDto } from '../dto/user-registration.req.dto';
import { SETTINGS } from 'src/auth.util';
import { User } from '../entity/user.entity';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async doUserRegistration(
    @Body(SETTINGS.VALIDATION_PIPE)
    userRegister: UserRegisterRequestDto,
  ): Promise<User> {
    return await this.userService.doUserRegistration(userRegister);
  }
}
