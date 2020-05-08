import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Role } from "./role.entity";
import { PersonClient } from "./personClient.entity";
import { Notification } from "./notification.entity";
import { Shipping } from "./shipping.entity";
import { UserStatus } from "./userStatus.entity";

@Entity({ name: 'usuario' })
export class User {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'usuario' })
  username: string;

  @Column({ name: 'contrasena' })
  password: string;

  @JoinColumn({ name: 'fk_persona_cliente' })
  @OneToOne(type => PersonClient, personClient => personClient.user)
  personClient: PersonClient;

  @JoinColumn({ name: 'fk_rol' })
  @ManyToOne(type => Role, role => role.users)
  role: Role;

  @OneToMany(type => Notification, notifications => notifications.user)
  notifications: Notification[];

  @OneToMany(type => Shipping, shippings => shippings.user)
  shippings: Shipping[];

  @OneToMany(type => UserStatus, userStatus => userStatus.user)
  userStatus: UserStatus[];
}