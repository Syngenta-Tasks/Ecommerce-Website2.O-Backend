import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { PasswordResetDto } from './password-reset.dto';
import { PasswordResetRequestDto } from './password-reset-request.dto';
import { MailerService } from './mailer.service';
import { UserService } from '../users/services/user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PasswordReset } from './password-reset.entity';
import { User } from '../users/entity/user.entity';
import * as bcrypt from 'bcrypt';
import { ApiResponse } from './api-response.interface';

@Controller('password-reset')
export class PasswordResetController {
  constructor(
    @InjectRepository(PasswordReset)
    private readonly passwordResetRepository: Repository<PasswordReset>,
    private readonly mailerService: MailerService,
    private readonly userService: UserService,
  ) {}

  @Post('request')
  async requestPasswordReset(
    @Body() passwordResetRequestDto: PasswordResetRequestDto,
  ): Promise<ApiResponse<string>> {
    const token = Math.random().toString(20).substring(2, 12);

    const passwordReset = this.passwordResetRepository.create({
      email: passwordResetRequestDto.email,
      token,
    });
    await this.passwordResetRepository.save(passwordReset);

    await this.mailerService.sendPasswordResetEmail(
      passwordResetRequestDto.email,
      token,

    );
    return {
      success: true,
      statusCode: HttpStatus.OK,
      message: 'Please check the email for the password reset token.',
      data: token,
    }
  }

  @Post('reset')
  async resetPassword(
    @Body() passwordResetDto: PasswordResetDto,
  ): Promise<ApiResponse<string>> {
    const { email, token, newPassword } = passwordResetDto;

    const passwordReset = await this.passwordResetRepository.findOne({
      where: { email, token, used: false },
    });

    if (!passwordReset) {
      throw new BadRequestException('Invalid or expired token');
    }

    const user: User = await this.userService.getUserByEmail(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10)

    user.password = hashedPassword;
    await this.userService.update(user.id, user);

    passwordReset.used = true;
    await this.passwordResetRepository.save(passwordReset);

    return {
      success: true,
      statusCode: HttpStatus.OK,
      message: 'Password reset successful',
      data: 'Password reset successful',
    };
  }
}