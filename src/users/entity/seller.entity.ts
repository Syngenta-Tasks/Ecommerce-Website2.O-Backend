import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { BaseEntity } from './base-entity';

@Entity()
export class Seller extends BaseEntity {

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  companyName: string;

  @Column({ nullable: true })
  phone: number;

  @Column({ nullable: true })
  email: string;

  @OneToOne(() => User, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  
}
