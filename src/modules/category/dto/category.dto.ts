import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { SubcategoryDto } from './subcategory.dto';

export class CategoryDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => SubcategoryDto)
  subcategories: SubcategoryDto[];
}
