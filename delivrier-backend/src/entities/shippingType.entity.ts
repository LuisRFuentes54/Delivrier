import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Shipping } from "./shipping.entity";
import { ShippingTypeStatus } from "./shippingTypeStatus.entity";

@Entity({ name: 'tipo_envio' })
export class ShippingType {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'nombre' })
  name: string;

  @Column({ name: 'descripcion' })
  description: string;

  @Column({ name: 'tarifa_base' })
  baseFare: number;

  @OneToMany(type => Shipping, shippings => shippings.shippingType)
  shippings: Shipping[];

  @OneToMany(type => ShippingTypeStatus, shippingTypeStatus => shippingTypeStatus.shippingType)
  shippingTypeStatus: ShippingTypeStatus[];
}