import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  NotFoundException,
} from '@nestjs/common';
import { Category } from '../entity/category.entity';
import { CategoryService } from '../services/category.service';
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() category: Category): Promise<Category> {
    return this.categoryService.create(category);
  }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Patch(':name') 
  async updateCategoryByName(
    @Param('name') name: string, 
    @Body() updatedCategory: Category,
  ): Promise<Category> {
    return this.categoryService.updateCategoryByName(name, updatedCategory);
  }

  @Delete(':name') 
  async removeCategoryByName(@Param('name') name: string): Promise<void> {
    try {
      await this.categoryService.removeCategoryByName(name);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(`Category ${name} not found`);
      }
      throw error; 
    }
  }
}