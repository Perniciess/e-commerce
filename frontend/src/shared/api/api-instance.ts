import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const apiInstance = axios.create({
  baseURL: process.env.NEST_WEB_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return apiInstance({
    ...config,
    ...options,
  }).then((r) => r.data).catch((error: AxiosError) => {
    alert("Ошибка подключения к базе данных");
    throw error;
  });;
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
