import axios from "axios";
import { Repository } from "../types/Repository";
import { Languages } from "../types/Languages";

export const getLanguages = (repo: Repository) => {
  return axios.get<Languages>(repo.languages_url)
    .then(response => response.data);
};
