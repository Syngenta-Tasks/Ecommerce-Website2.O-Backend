import { IsNotEmpty } from 'class-validator';
import { UserRegisterRequestDto } from './user-registration.req.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(UserRegisterRequestDto) {
  id: number;

  @IsNotEmpty()
  name: string;

}
