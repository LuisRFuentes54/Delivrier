import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { ParameterPack } from "./parameterPack.entity";
import { ParameterShipping } from "./parameterShipping.entity";

@Entity({ name: 'parametro' })
export class Parameter {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'nombre' })
  name: string;

  @Column({ name: 'unidad'})
  unit: string;

  @Column({ name: 'valor_maximo'})
  maxValue: number;

  @Column({ name: 'valor_minimo'})
  minValue: number;

  @JoinColumn({ name: 'fk_parametro' })
  @ManyToOne(type => Parameter, param => param.params)
  param: Parameter;

  @OneToMany(type => Parameter, params => params.param)
  params: Parameter[];

  @OneToMany(type => ParameterPack, paramsPack => paramsPack.param)
  paramsPack: ParameterPack[];

  @OneToMany(type => ParameterShipping, paramsShipping => paramsShipping.param)
  paramsShipping: Parameter[];
}