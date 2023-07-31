import { IsNotEmpty } from 'class-validator';

export class SubcategoryDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  categoryId: number;
}
