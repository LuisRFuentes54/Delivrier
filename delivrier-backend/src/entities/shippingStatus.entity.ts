import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Status } from "./status.entity";
import { Shipping } from "./shipping.entity";

@Entity({ name: 'estatus_envio' })
export class ShippingStatus {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'fecha' })
  date: string;

  @JoinColumn({ name: 'fk_estatus' })
  @ManyToOne(type => Status, status => status.shippingStatus)
  status: Status;

  @JoinColumn({ name: 'fk_envio' })
  @ManyToOne(type => Shipping, shipping => shipping.shippingStatus)
  shipping: Shipping;
}