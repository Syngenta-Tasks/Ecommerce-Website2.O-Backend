import { Module } from '@nestjs/common';
import { UserController } from '../controllers/users.controller';
import { UserService } from '../services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { PasswordResetController } from 'src/modules/password/password-reset.controller';
import { PasswordResetService } from 'src/modules/password/password-reset-service';
import { PasswordReset } from 'src/modules/password/password-reset.entity';
import { MailerService } from 'src/modules/password/mailer.service';

@Module({
  controllers: [UserController, PasswordResetController],
  imports: [TypeOrmModule.forFeature([User, PasswordReset])],
  providers: [UserService, PasswordResetService, MailerService],

  exports: [UserService, PasswordResetService, MailerService],
})
export class UserModule {}
