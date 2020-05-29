import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Status } from "./status.entity";
import { Packing } from "./packing.entity";

@Entity({ name: 'estatus_empaque' })
export class PackingStatus {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'fecha' })
  date: string;

  @JoinColumn({ name: 'fk_estatus' })
  @ManyToOne(type => Status, status => status.packingStatus)
  status: Status;

  @JoinColumn({ name: 'fk_empaque' })
  @ManyToOne(type => Packing, packing => packing.packingStatus)
  packing: Packing;
}