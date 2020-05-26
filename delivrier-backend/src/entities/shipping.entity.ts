import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { User } from "./user.entity";
import { Insurance } from "./insurance.entity";
import { PersonDestinatary } from "./personDestinatary.entity";
import { ShippingType } from "./shippingType.entity";
import { Road } from "./road.entity";
import { Pack } from "./pack.entity";
import { ParameterShipping } from "./parameterShipping.entity";
import { ShippingStatus } from "./shippingStatus.entity";
import { SimulationConfig } from "./simulationConfig.entity";

@Entity({ name: 'envio' })
export class Shipping {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'n_rastreo' })
  nLocalitation: number;

  @JoinColumn({ name: 'fk_usuario' })
  @ManyToOne(type => User, user => user.shippings)
  user: User;

  @JoinColumn({ name: 'fk_seguro' })
  @ManyToOne(type => Insurance, insurance => insurance.shippings)
  insurance: Insurance;

  @JoinColumn({ name: 'fk_persona_destinatario' })
  @ManyToOne(type => PersonDestinatary, personDestinatary => personDestinatary.shippings)
  personDestinatary: PersonDestinatary;

  @JoinColumn({ name: 'fk_tipo_envio' })
  @ManyToOne(type => ShippingType, shippingType => shippingType.shippings)
  shippingType: ShippingType;

  @JoinColumn({ name: 'fk_configuracion_simulacion' })
  @ManyToOne(type => SimulationConfig, simulationConfig => simulationConfig.shippings)
  simulationConfig: SimulationConfig;

  @OneToMany(type => Road, road => road.shipping)
  roads: Road[];

  @OneToMany(type => Pack, packs => packs.shipping)
  packs: Pack[];

  @OneToMany(type => ParameterShipping, paramsShipping => paramsShipping.shipping)
  paramsShipping: ParameterShipping[];

  @OneToMany(type => ShippingStatus, shippingStatus => shippingStatus.shipping)
  shippingStatus: ShippingStatus[];
}