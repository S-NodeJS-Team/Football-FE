import axios from "axios";

let headers = {};

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_BE_URL,
  headers,
});

customAxios.interceptors.request.use(
  function (config) {
    const currUser = JSON.parse(localStorage.getItem("access_token") as any);

    if (!currUser) {
      return config;
    }

    if (currUser) {
      config.headers.Authorization = `Bearer ${currUser}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  function (response) {
    return response && response.data ? response.data : response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default customAxios;
