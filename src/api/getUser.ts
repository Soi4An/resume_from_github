import { User } from "../types/User";
import { client } from "./client";

export const getUser = (userName: string) => {
  return client.get<User>('/users/' + userName);
};
