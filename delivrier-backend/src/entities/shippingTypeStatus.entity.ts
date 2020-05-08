import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Status } from "./status.entity";
import { ShippingType } from "./shippingType.entity";

@Entity({ name: 'estatus_tipo_envio' })
export class ShippingTypeStatus {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'fecha' })
  date: string;

  @JoinColumn({ name: 'fk_estatus' })
  @ManyToOne(type => Status, status => status.shippingTypeStatus)
  status: Status;

  @JoinColumn({ name: 'fk_tipo_envio' })
  @ManyToOne(type => ShippingType, shippingType => shippingType.shippingTypeStatus)
  shippingType: ShippingType;
}