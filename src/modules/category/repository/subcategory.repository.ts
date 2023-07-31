import { EntityRepository, Repository } from 'typeorm';
import { Subcategory } from '../entity/subcategory.entity';

@EntityRepository(Subcategory)
export class SubcategoryRepository extends Repository<Subcategory> {

}
