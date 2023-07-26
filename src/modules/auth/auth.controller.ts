import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  Get,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserService } from '../users/services/user.service';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { Role } from './role.enum';

@Controller('user')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req): Promise<any> {
    return this.authService.generateToken(req.user);
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('user')
  // async user(@Request() req): Promise<any> {
  //   return req.user;
  // }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Get('/user')
  async getProfile(@Request() req): Promise<any> {
    return req.user;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get('/admin')
  async getDashboard(@Request() req): Promise<any> {
    return req.user;
  }

}
