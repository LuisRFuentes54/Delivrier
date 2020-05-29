import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Status } from "./status.entity";
import { Office } from "./office.entity";

@Entity({ name: 'estatus_oficina' })
export class OfficeStatus {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'fecha' })
  date: string;

  @JoinColumn({ name: 'fk_estatus' })
  @ManyToOne(type => Status, status => status.officeStatus)
  status: Status;

  @JoinColumn({ name: 'fk_oficina' })
  @ManyToOne(type => Office, office => office.officeStatus)
  office: Office;
}