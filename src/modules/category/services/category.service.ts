import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Category } from '../entity/category.entity';
import { CategoryDto } from '../dto/category.dto';
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    private entityManager: EntityManager,
  ) {}

  async create(categoryDto: CategoryDto): Promise<Category> {
    const category = new Category();
    category.name = categoryDto.name;
    category.subcategories = [];
    return await this.entityManager.save(category);
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find({ relations: ['subcategories'] });
  }

  async findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOne({
      where: { id },
      relations: { subcategories: true },
    });
  }

  async findCategoryByName(name: string): Promise<Category | undefined> {
    return this.categoryRepository.findOne({ where: { name } });
  }

  async updateCategoryByName(
    name: string,
    updatedCategory: Category,
  ): Promise<Category> {
    const categoryToUpdate = await this.findCategoryByName(name);

    if (!categoryToUpdate) {
      throw new NotFoundException(`Category ${name} not found`);
    }

    await this.categoryRepository.update(categoryToUpdate.id, updatedCategory);
    return this.findOne(categoryToUpdate.id);
  }
  
  async removeCategoryByName(name: string): Promise<void> {
    const categoryToRemove = await this.findCategoryByName(name);

    if (!categoryToRemove) {
      throw new NotFoundException(`Category ${name} not found`);
    }

    await this.categoryRepository.remove(categoryToRemove);
  }
}