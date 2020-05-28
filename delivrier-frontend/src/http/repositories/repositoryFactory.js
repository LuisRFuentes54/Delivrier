import UserRepository from "./user.repository";
import AuthorizeRepository from "./authorize.reposity";
import LanguageRepository from "./language.repository";

const repositories = {
  users: UserRepository,
  authorize: AuthorizeRepository,
  language: LanguageRepository,
};
export default {
  get: (name) => repositories[name],
};
