import axios from "axios";
import { Repository } from "../types/Repository";
import { Languages } from "../types/Languages";
// import { YOUR_ACCESS_TOKEN_GITHUB } from "../config";

export const getLanguages = (repo: Repository) => {
  return axios.get<Languages>(repo.languages_url, {
    headers: {
      Authorization: `Bearer ${process.env.YOUR_ACCESS_TOKEN_GITHUB}`
    }
  })
    .then(response => response.data);
};
