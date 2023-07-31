import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subcategory } from '../entity/subcategory.entity';

@Injectable()
export class SubcategoryService {
  constructor(
    @InjectRepository(Subcategory)
    private subcategoryRepository: Repository<Subcategory>,
  ) {}

  async create(subcategory: Subcategory): Promise<Subcategory> {
    return this.subcategoryRepository.save(subcategory);
  }
}
