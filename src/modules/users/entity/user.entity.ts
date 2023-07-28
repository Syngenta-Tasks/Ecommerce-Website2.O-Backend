import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './base-entity';

import { Role } from 'src/modules/auth/roles.enum';

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


  @Column({ nullable: true })
  resetToken: string;

  @Column({ nullable: true })
  resetTokenExpiration: Date;


  @Column({ type: 'enum', enum: Role, default: Role.USER })
  roles: Role;

 
  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

}
