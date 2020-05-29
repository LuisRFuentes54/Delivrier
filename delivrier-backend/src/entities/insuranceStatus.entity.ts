import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Status } from "./status.entity";
import { Insurance } from "./insurance.entity";

@Entity({ name: 'estatus_seguro' })
export class InsuranceStatus {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'fecha' })
  date: string;

  @JoinColumn({ name: 'fk_estatus' })
  @ManyToOne(type => Status, status => status.insuranceStatus)
  status: Status;

  @JoinColumn({ name: 'fk_seguro' })
  
  @ManyToOne(type => Insurance, insurance => insurance.insuranceStatus)

  insurance: Insurance;
}