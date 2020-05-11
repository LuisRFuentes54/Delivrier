import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Shipping } from "./shipping.entity";
import { SecureStatus } from "./secureStatus.entity";

@Entity({ name: 'seguro' })
export class Secure {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'nombre' })
  name: string;

  @Column({ name: 'descripcion' })
  description: string;

  @Column({ name: 'tarifa' })
  baseRate: number;

  @OneToMany(type => Shipping, shippings => shippings.secure)
  shippings: Shipping[];

  @OneToMany(type => SecureStatus, secureStatus => secureStatus.secure)
  secureStatus: SecureStatus[];
}