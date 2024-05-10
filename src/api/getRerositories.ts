import { Repository } from "../types/Repository";
import { client } from "./client";

export const getRerositories = (userName: string) => {
  return client.get<Repository>('/users/' + userName + '/repos');
};

// .name .created_at .updated_at .html_url .language .languages_url

// languages_url = https://api.github.com/repos/Soi4An/auth-app/languages