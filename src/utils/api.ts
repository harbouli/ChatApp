import axios, {AxiosRequestConfig} from "axios";
import {LoginParameters, RegisterParameters} from "./types";
const {REACT_APP_API_HOSTNAME} = process.env;

const config: AxiosRequestConfig = {withCredentials: true};
export const postRegister = async (data: RegisterParameters) =>
  axios.post(`${REACT_APP_API_HOSTNAME}/auth/register`, data, config);

export const postLogin = async (data: LoginParameters) =>
  axios.post(`${REACT_APP_API_HOSTNAME}/auth/login`);
