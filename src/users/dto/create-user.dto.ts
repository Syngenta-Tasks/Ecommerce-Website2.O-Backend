import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  email: string;

  @IsNumber()
  phone: number;

  @IsString()
  password: string;

}
