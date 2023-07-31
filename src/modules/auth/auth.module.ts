import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { UserModule } from '../users/modules/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { RolesGuard } from './roles.guard';


@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'asdftyqwerty@!#784f',
      // signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, RolesGuard],
  controllers: [AuthController],
})
export class AuthModule {}