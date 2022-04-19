import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30 * 1000,
  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: 'brackets' }),
  withCredentials: true,
});

// request interceptor
request.interceptors.request.use((axiosConfig: AxiosRequestConfig) => {
  axiosConfig.headers = {
    ...axiosConfig.headers,
    Authorization: ``,
  };

  return axiosConfig;
});

request.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => {
    const { status } = error.response;

    if (status === 400) {
      const {
        data: { message },
      } = error.response;

      alert(message);
    }

    return Promise.reject(error);
  }
);

export default request;
