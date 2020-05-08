import { Role } from "./role.entity";
import { PersonClient } from "./personClient.entity";
import { User } from "./user.entity";
import { PersonDestinatary } from "./personDestinatary.entity";
import { Notification } from "./notification.entity";
import { ShippingType } from "./shippingType.entity";
import { Secure } from "./secure.entity";
import { Place } from "./place.entity";
import { Office } from "./office.entity";
import { Shipping } from "./shipping.entity";
import { Road } from "./road.entity";
import { Parameter } from "./parameter.entity";
import { Packing } from "./packing.entity";
import { Pack } from "./pack.entity";
import { ParameterPack } from "./parameterPack.entity";
import { ParameterShipping } from "./parameterShipping.entity";
import { Status } from "./status.entity";
import { SecureStatus } from "./secureStatus.entity";
import { ShippingStatus } from "./shippingStatus.entity";
import { UserStatus } from "./userStatus.entity";
import { ShippingTypeStatus } from "./shippingTypeStatus.entity";
import { PackingStatus } from "./packingStatus.entity";
import { OfficeStatus } from "./officeStatus.entity";
import { NotificationStatus } from "./notificationStatus.entity";
import { SimulationConfig } from "./simulationConfig.entity";

export const entities = [
    Role,
    PersonClient,
    User,
    PersonDestinatary,
    Notification,
    ShippingType,
    Secure,
    Place,
    Office,
    Shipping,
    Road,
    Parameter,
    Packing,
    Pack,
    ParameterPack,
    ParameterShipping,
    Status,
    SecureStatus,
    ShippingStatus,
    UserStatus,
    ShippingTypeStatus,
    PackingStatus,
    OfficeStatus,
    NotificationStatus,
    SimulationConfig,
]