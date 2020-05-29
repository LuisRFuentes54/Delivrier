import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Shipping } from "./shipping.entity";

@Entity({ name: 'configuracion_simulacion' })
export class SimulationConfig {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'tiempo_inicio' })
  begining: number;

  @OneToMany(type => Shipping, shipping => shipping.simulationConfig)
  shippings: Shipping[];
  
}