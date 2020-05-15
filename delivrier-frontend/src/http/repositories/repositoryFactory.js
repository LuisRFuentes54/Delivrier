import UserRepository from "./user.repository";
import AuthorizeRepository from "./authorize.reposity";

const repositories = {
  users: UserRepository,
  authorize: AuthorizeRepository,
};
export default {
  get: (name) => repositories[name],
};
