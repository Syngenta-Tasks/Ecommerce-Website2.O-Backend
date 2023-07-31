import {
  Entity,
  Column,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base-entity';
import { Subcategory } from './subcategory.entity';

@Entity({ name: 'category' })
export class Category extends BaseEntity {
 
  @Column({ nullable: true })
  name: string;

  @OneToMany(() => Subcategory, (subcategory) => subcategory.category, {
    cascade: true,
  })
  @JoinColumn({ name: 'categoryId' })
  subcategories: Subcategory[];

}
