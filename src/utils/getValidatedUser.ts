import { User } from "../types/User";
import { ValidateUser } from "../types/ValidateUser";

export const getValidatedUser: (user: User) => ValidateUser = ({
  login,
  name,
  avatar_url,
  public_repos,
  repos_url,
  created_at,
}) => {
  return { login, name, avatar_url, public_repos, repos_url, created_at };
};
