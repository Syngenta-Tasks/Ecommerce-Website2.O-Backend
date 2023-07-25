import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

import { UserModule } from './modules/users/modules/user.module';
import { UserController } from './modules/users/controllers/users.controller';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, AuthModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController, UserController],



@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
