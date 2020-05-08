import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Pack } from "./pack.entity";
import { PackingStatus } from "./packingStatus.entity";

@Entity({ name: 'empaque' })
export class Packing {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'nombre' })
  name: string;

  @Column({ name: 'descripcion'})
  description: string;

  @Column({ name: 'alto'})
  heigth: number;

  @Column({ name: 'ancho'})
  witdh: number;

  @Column({ name: 'largo'})
  large: number;

  @Column({ name: 'precio'})
  price: number;

  @OneToMany(type => Pack, packs => packs.packing)
  packs: Pack[];

  @OneToMany(type => PackingStatus, packingStatus => packingStatus.packing)
  packingStatus: PackingStatus[];
}