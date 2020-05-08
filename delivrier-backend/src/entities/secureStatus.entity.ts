import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Status } from "./status.entity";
import { Secure } from "./secure.entity";

@Entity({ name: 'estatus_seguro' })
export class SecureStatus {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'fecha' })
  date: string;

  @JoinColumn({ name: 'fk_estatus' })
  @ManyToOne(type => Status, status => status.secureStatus)
  status: Status;

  @JoinColumn({ name: 'fk_seguro' })
  @ManyToOne(type => Secure, secure => secure.secureStatus)
  secure: Secure;
}