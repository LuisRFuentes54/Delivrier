import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Pack } from "./pack.entity";
import { Parameter } from "./parameter.entity";

@Entity({ name: 'parametro_paquete' })
export class ParameterPack {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'valor'})
  value: number;

  @JoinColumn({ name: 'fk_paquete' })
  @ManyToOne(type => Pack, pack => pack.paramsPack)
  pack: Pack;

  @JoinColumn({ name: 'fk_parametro' })
  @ManyToOne(type => Parameter, param => param.paramsPack)
  param: Parameter;
}