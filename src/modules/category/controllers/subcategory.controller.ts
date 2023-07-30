import { Controller, Post, Body } from '@nestjs/common';
import { Subcategory } from '../entity/subcategory.entity';
import { SubcategoryService } from '../services/subcategory.service';

@Controller('subcategories')
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}

  @Post()
  create(@Body() subcategory: Subcategory): Promise<Subcategory> {
    return this.subcategoryService.create(subcategory);
  }
}
