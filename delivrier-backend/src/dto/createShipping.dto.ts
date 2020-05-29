export class CreateShipping {
  userId: number;
  personClientId: number;
  personDestinataryId: number | null;
  personDestinatary: null | {
    firstName: string;
    secondName: string;
    firstLastName: string;
    secondLastName: string;
    email: string;
    phoneNumber: string;
  };
  shippingPlanId: number;
  insuranceId: number | null;
  officeId: number;
  delay:number;
  shippmentTrackingNumber: number;
  packageQuantity: {
    id: number;
    value: number;
  };
  packages: {
    description: string;
    parameters: {
      id: number;
      value: number;
    }[];
    packing: number | null;
  }[];
  route: {
    initialDate: string;
    finalDate: string;
    distance: number;
    lon: number;
    lat: number;
    name: string;
    zip: number | null;
  }[];
}
