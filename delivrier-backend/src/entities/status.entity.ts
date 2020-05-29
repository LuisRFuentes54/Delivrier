import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { InsuranceStatus } from "./insuranceStatus.entity";
import { ShippingStatus } from "./shippingStatus.entity";
import { UserStatus } from "./userStatus.entity";
import { ShippingTypeStatus } from "./shippingTypeStatus.entity";
import { PackingStatus } from "./packingStatus.entity";
import { OfficeStatus } from "./officeStatus.entity";
import { NotificationStatus } from "./notificationStatus.entity";
import { PersonDestinataryStatus } from "./personDestinataryStatus.entity";


@Entity({ name: 'estatus' })
export class Status {
  @PrimaryGeneratedColumn({ name: 'clave' })
  id: number;

  @Column({ name: 'nombre' })
  name: string;

  @OneToMany(type => InsuranceStatus, insuranceStatus => insuranceStatus.status)
  insuranceStatus: InsuranceStatus[];

  @OneToMany(type => ShippingStatus, shippingStatus => shippingStatus.status)
  shippingStatus: ShippingStatus[];

  @OneToMany(type => UserStatus, userStatus => userStatus.status)
  userStatus: UserStatus[];

  @OneToMany(type => ShippingTypeStatus, shippingTypeStatus => shippingTypeStatus.status)
  shippingTypeStatus: ShippingTypeStatus[];

  @OneToMany(type => PackingStatus, packingStatus => packingStatus.status)
  packingStatus: PackingStatus[];

  @OneToMany(type => OfficeStatus, officeStatus => officeStatus.status)
  officeStatus: OfficeStatus[];

  @OneToMany(type => NotificationStatus, notificationStatus => notificationStatus.status)
  notificationStatus: NotificationStatus[];

  @OneToMany(type => PersonDestinataryStatus, personDestinataryStatus => personDestinataryStatus.status)
  personDestinataryStatus: PersonDestinataryStatus[];
}