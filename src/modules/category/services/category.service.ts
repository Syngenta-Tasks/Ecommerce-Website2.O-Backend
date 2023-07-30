import { Injectable } from '@nestjs/common';
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


  async update(id: number, category: Category): Promise<Category> {
    await this.categoryRepository.update(id, category);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
