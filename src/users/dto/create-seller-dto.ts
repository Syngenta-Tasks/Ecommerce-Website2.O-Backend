import { IsNumber, IsString } from 'class-validator';

export class CreateSellerDto {
  @IsString()
  name: string;

  @IsString()
  compayName: string;

  @IsString()
  email: string;

  @IsNumber()
  phone: number;

}
