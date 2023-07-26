import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './base-entity';
import { Role } from 'nest-access-control';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  confirm: string;


  @Column({ type: 'jsonb', nullable: true })
  roles: Role[];

  
  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;
}
