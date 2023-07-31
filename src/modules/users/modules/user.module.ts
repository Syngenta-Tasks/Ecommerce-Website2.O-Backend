import { Module } from '@nestjs/common';
import { UserController } from '../controllers/users.controller';
import { UserService } from '../services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { PasswordResetController } from 'src/modules/password/password-reset.controller';
import { PasswordResetService } from 'src/modules/password/password-reset-service';
import { PasswordReset } from 'src/modules/password/password-reset.entity';
import { MailerService } from 'src/modules/password/mailer.service';
import { RolesGuard } from 'src/modules/auth/roles.guard';
import { CategoryController } from 'src/modules/category/controllers/category.controller';
import { Category } from 'src/modules/category/entity/category.entity';
import { CategoryService } from 'src/modules/category/services/category.service';
import { Subcategory } from 'src/modules/category/entity/subcategory.entity';
import { SubcategoryController } from 'src/modules/category/controllers/subcategory.controller';
import { SubcategoryService } from 'src/modules/category/services/subcategory.service';

@Module({
  controllers: [
    UserController,
    PasswordResetController,
    CategoryController,
    SubcategoryController,
  ],
  imports: [
    TypeOrmModule.forFeature([User, PasswordReset, Category, Subcategory]),
  ],
  providers: [
    UserService,
    PasswordResetService,
    MailerService,
    CategoryService,
    SubcategoryService,
    RolesGuard,
  ],

  exports: [
    UserService,
    PasswordResetService,
    MailerService,
    CategoryService,
    SubcategoryService,
  ],
})
export class UserModule {}