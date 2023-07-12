import { IsNumber, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsNumber()
  phone: number;

  @IsString()
  email: string;
  
  @IsString()
  password: string;

  @IsString()
  birthdate: Date;
}
