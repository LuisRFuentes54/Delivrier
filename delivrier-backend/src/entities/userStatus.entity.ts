import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Status } from "./status.entity";
import { User } from "./user.entity";

@Entity({ name: 'estatus_usuario' })
export class UserStatus {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'fecha' })
  date: string;

  @JoinColumn({ name: 'fk_estatus' })
  @ManyToOne(type => Status, status => status.userStatus)
  status: Status;

  @JoinColumn({ name: 'fk_usuario' })
  @ManyToOne(type => User, user => user.userStatus)
  user: User;
}