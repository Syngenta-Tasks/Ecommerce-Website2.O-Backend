import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly surname: string;

  @IsString()
  readonly email: string;

  @IsNumber()
  readonly phone: number;

  @IsString()
  readonly password: string;

}
