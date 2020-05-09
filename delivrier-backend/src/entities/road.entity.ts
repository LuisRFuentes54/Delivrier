import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany} from 'typeorm';
import { Shipping } from "./shipping.entity";
import { Office } from "./office.entity";
import { Place } from "./place.entity";

@Entity({ name: 'trayecto' })
export class Road {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'fecha_inicial' })
  initialDate: string;

  @Column({ name: 'fecha_final' })
  endingDate: string;

  @Column({ name: 'distancia' })
  distance: number;

  @JoinColumn({ name: 'fk_lugar_origen' })
  @ManyToOne(type => Place, place => place.initialRoads)
  initialPlace: Place;

  @JoinColumn({ name: 'fk_lugar_destino' })
  @ManyToOne(type => Place, place => place.endingRoads)
  endingPlace: Place;

  @JoinColumn({ name: 'fk_oficina_origen' })
  @ManyToOne(type => Office, office => office.initialRoads)
  initialOffice: Office;

  @JoinColumn({ name: 'fk_envio' })
  @ManyToOne(type => Shipping, shipping => shipping.roads)
  shipping: Shipping;
}