import UserRepository from "./user.repository";

const repositories = {
  users: UserRepository
};
export default {
  get: name => repositories[name]
};
