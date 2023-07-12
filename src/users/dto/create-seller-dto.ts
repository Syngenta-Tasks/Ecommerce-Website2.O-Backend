import { IsNumber, IsString } from 'class-validator';

export class CreateSellerDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly compayName: string;

  @IsString()
  readonly email: string;

  @IsNumber()
  readonly phone: number;

}
