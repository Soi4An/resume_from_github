import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const instance = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   Authorization: 'Client-ID ' + ACCESS_KEY,
  // },
});

export const client = {
  async get<T>(url: string) {
    const response = await instance.get<T>(url);

    return response.data;
  },
};
