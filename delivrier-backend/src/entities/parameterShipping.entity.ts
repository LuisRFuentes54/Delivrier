import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Shipping } from "./shipping.entity";
import { Parameter } from "./parameter.entity";

@Entity({ name: 'parametro_envio' })
export class ParameterShipping {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'valor'})
  value: number;

  @JoinColumn({ name: 'fk_envio' })
  @ManyToOne(type => Shipping, shipping => shipping.paramsShipping)
  shipping: Shipping;

  @JoinColumn({ name: 'fk_parametro' })
  @ManyToOne(type => Parameter, param => param.paramsShipping)
  param: Parameter;
}