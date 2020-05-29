import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Status } from "./status.entity";
import { PersonDestinatary } from "./personDestinatary.entity";

@Entity({ name: 'estatus_persona_destinatario' })
export class PersonDestinataryStatus {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'fecha' })
  date: string;

  @JoinColumn({ name: 'fk_estatus' })
  @ManyToOne(type => Status, status => status.personDestinataryStatus)
  status: Status;

  @JoinColumn({ name: 'fk_persona_destinatario' })
  @ManyToOne(type => PersonDestinatary, personDestinatary => personDestinatary.personDestinataryStatus)
  personDestinatary: PersonDestinatary;
}