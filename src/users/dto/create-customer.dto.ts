import { IsNumber, IsString } from 'class-validator';

export class CreateCustomerDto {
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

  @IsString()
  readonly birthdate: Date;
}
