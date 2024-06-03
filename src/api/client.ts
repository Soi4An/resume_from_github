import axios from 'axios';
// import { YOUR_ACCESS_TOKEN_GITHUB } from '../config';

const BASE_URL = 'https://api.github.com';

const instance = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   'User-Agent': 'Soi4An'
  // }
  headers: {
    Authorization: `Bearer ${process.env.YOUR_ACCESS_TOKEN_GITHUB}`
  }
});

export const client = {
  async get<T>(url: string) {
    const response = await instance.get<T>(url);

    return response.data;
  },
};
