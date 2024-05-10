import { User } from "../types/User";

export const validatedUser = ({
  login,
  name,
  avatar_url,
  public_repos,
  repos_url,
  created_at,
}: User) => {
  return { login, name, avatar_url, public_repos, repos_url, created_at };
};
