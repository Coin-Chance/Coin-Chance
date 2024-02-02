import axios from "axios";
import { environment } from "@config";

export const domain: string = environment.apiKey;

export const url: string = `${domain}api`;
export const requestUrl = axios.create({
  baseURL: url,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// define request interceptors
requestUrl.interceptors.request.use((request) => {
  const accesToken: any = localStorage.getItem("token");
  if (accesToken && request.headers) {
    request.headers.loginToken = accesToken;
    request.headers.Authorization = `Bearer ${accesToken}`;
  }
  return request;
});
