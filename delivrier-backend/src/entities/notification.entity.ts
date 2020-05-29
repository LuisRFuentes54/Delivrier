import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from "./user.entity";
import { NotificationStatus } from "./notificationStatus.entity";

@Entity({ name: 'notificacion' })
export class Notification {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'nombre', nullable: true })
  name: string;

  @Column({ name: 'descripcion', nullable: true })
  description: string;

  @JoinColumn({ name: 'fk_usuario' })
  @ManyToOne(type => User, user => user.notifications)
  user: User;

  @OneToMany(type => NotificationStatus, notificationStatus => notificationStatus.notification)
  notificationStatus: NotificationStatus[];
}