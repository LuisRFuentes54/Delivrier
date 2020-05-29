import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Packing } from "./packing.entity";
import { Shipping } from "./shipping.entity";
import { ParameterPack } from "./parameterPack.entity";

@Entity({ name: 'paquete' })
export class Pack {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'descripcion'})
  description: string;

  @JoinColumn({ name: 'fk_empaque' })
  @ManyToOne(type => Packing, packing => packing.packs)
  packing: Packing;

  @JoinColumn({ name: 'fk_envio' })
  @ManyToOne(type => Shipping, shipping => shipping.packs)
  shipping: Shipping;

  @OneToMany(type => ParameterPack, paramsPack => paramsPack.pack)
  paramsPack: ParameterPack[];
}