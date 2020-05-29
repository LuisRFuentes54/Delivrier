import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Place } from "./place.entity";
import { Road } from "./road.entity";
import { OfficeStatus } from "./officeStatus.entity";

@Entity({ name: 'oficina' })
export class Office {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'nombre' })
  name: string;

  @JoinColumn({ name: 'fk_lugar' })
  @ManyToOne(type => Place, place => place.offices)
  place: Place;

  @OneToMany(type => Road, roads => roads.initialOffice)
  initialRoads: Road[];

  @OneToMany(type => OfficeStatus, officeStatus => officeStatus.office)
  officeStatus: OfficeStatus[];
}