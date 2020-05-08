import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { Office } from "./office.entity";
import { Road } from "./road.entity";

@Entity({ name: 'lugar' })
export class Place {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'nombre' })
  name: string;

  @Column({ name: 'tipo' })
  tipo: string;

  @JoinColumn({ name: 'fk_lugar' })
  @ManyToOne(type => Place, placeOwner => placeOwner.places)
  placeOwner: Place;

  @OneToMany(type => Place, places => places.placeOwner)
  places: Place[];

  @OneToMany(type => Office, offices => offices.place)
  offices: Office[];

  @OneToMany(type => Road, initialRoads => initialRoads.initialPlace)
  initialRoads: Road[];

  @OneToMany(type => Road, endingRoads => endingRoads.initialPlace)
  endingRoads: Road[];
}