import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { BaseEntity } from './base-entity';

@Entity({ name: 'subcategory' })
export class Subcategory extends BaseEntity{

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.subcategories)
  @JoinColumn({ name: 'categoryId' })
  category: Category;
}
