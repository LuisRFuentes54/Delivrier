import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Office } from "./office.entity";
import { Road } from "./road.entity";

@Entity({ name: 'lugar' })
export class Place {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'direccion' })
  address: string;

  @Column({ name: 'altitud', nullable: true })
  altitude: number;

  @Column({ name: 'longitud', nullable: true })
  longitude: number;

  @Column({ name: 'zip' })
  zip: number;

  @OneToMany(type => Office, offices => offices.place)
  offices: Office[];

  @OneToMany(type => Road, initialRoads => initialRoads.initialPlace)
  initialRoads: Road[];

  @OneToMany(type => Road, endingRoads => endingRoads.initialPlace)
  endingRoads: Road[];
}