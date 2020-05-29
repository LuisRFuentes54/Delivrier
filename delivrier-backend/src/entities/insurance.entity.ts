import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Shipping } from "./shipping.entity";
import { InsuranceStatus } from "./insuranceStatus.entity";

@Entity({ name: 'seguro' })
export class Insurance {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'nombre' })
  name: string;

  @Column({ name: 'descripcion' })
  description: string;

  @Column({ name: 'tarifa' })
  baseFare: number;

  @Column({ name: 'tarifa_max_devolucion' })
  maxRefundFare: number;

  @OneToMany(type => Shipping, shippings => shippings.insurance)
  shippings: Shipping[];

  @OneToMany(type => InsuranceStatus, insuranceStatus => insuranceStatus.insurance)
  insuranceStatus: InsuranceStatus[];

}