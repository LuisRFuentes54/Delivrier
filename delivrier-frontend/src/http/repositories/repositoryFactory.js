import UserRepository from "./user.repository";
import AuthorizeRepository from "./authorize.repository";
import OfficeRepository from "./office.repository";
import AddressRepository from "./address.repository";
import ShippingPlanRepository from "./shippingPlan.repository";
import InsuranceRepository from "./insurance.repository";
import ParameterRepository from "./parameter.repository";
import PackingRepository from "./packing.repository";
import ShippingRepository from "./shipping.repository";
import LanguageRepository from "./language.repository";

const repositories = {
  users: UserRepository,
  authorize: AuthorizeRepository,
  office: OfficeRepository,
  address: AddressRepository,
  shippingPlan: ShippingPlanRepository,
  insurance: InsuranceRepository,
  parameter: ParameterRepository,
  packing: PackingRepository,
  shipping: ShippingRepository
  language: LanguageRepository,
};
export default {
  get: (name) => repositories[name],
};
