import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { BaseEntity } from './base-entity';

@Entity()
export class Customer extends BaseEntity {
 
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  surname: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  birthdate: Date;

  @OneToOne(() => User, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

}
