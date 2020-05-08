import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Status } from "./status.entity";
import { Notification } from "./notification.entity";

@Entity({ name: 'estatus_notificacion' })
export class NotificationStatus {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'fecha' })
  date: string;

  @JoinColumn({ name: 'fk_estatus' })
  @ManyToOne(type => Status, status => status.notificationStatus)
  status: Status;

  @JoinColumn({ name: 'fk_notificacion' })
  @ManyToOne(type => Notification, notification => notification.notificationStatus)
  notification: Notification;
}