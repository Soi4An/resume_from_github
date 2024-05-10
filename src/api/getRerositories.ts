import { Repository } from "../types/Repository";
import { client } from "./client";

export const getRerositories = (userName: string) => {
  return client.get<Repository[]>('/users/' + userName + '/repos');
};
