import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from "./user.entity";

@Entity({ name: 'rol' })
export class Role {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'nombre' })
  name: string;

  @OneToMany(type => User, users => users.role)
  users: User[];
}