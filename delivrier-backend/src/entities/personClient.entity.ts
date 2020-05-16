import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from "./user.entity";
import { PersonDestinatary } from "./personDestinatary.entity";

@Entity({ name: 'persona_cliente' })
export class PersonClient {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'primer_nombre' })
  firstName: string;

  @Column({ name: 'segundo_nombre' })
  secondName: string;

  @Column({ name: 'primer_apellido' })
  firstLastName: string;

  @Column({ name: 'segundo_apellido' })
  secondLastName: string;

  @Column({ name: 'telefono' })
  phoneNumber: string;

  @Column({ name: 'correo' })
  email: string;

  @Column({ name: 'fecha_nacimiento' })
  birthDate: string;

  @Column ({ name: 'id' })
  identNum: number;

  @Column({ name: 'foto' })
  photo: string;

  @OneToOne(type => User, user => user.personClient)
  user: User;

  @OneToMany(type => PersonDestinatary, personDestinataries => personDestinataries.personClient)
  personDestinataries: PersonDestinatary[];
}