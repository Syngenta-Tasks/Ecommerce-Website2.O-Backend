import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base-entity';

@Entity()
export class User extends BaseEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  surname: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: number;

  @Column({ nullable: true })
  password: string;
}
