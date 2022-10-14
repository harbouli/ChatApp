import axios, {AxiosRequestConfig} from "axios";
import {
  createMessage,
  LoginParameters,
  Message,
  RegisterParameters,
} from "./types";
const {REACT_APP_API_HOSTNAME} = process.env;

const config: AxiosRequestConfig = {withCredentials: true};
export const postRegister = (data: RegisterParameters) =>
  axios.post(`${REACT_APP_API_HOSTNAME}/auth/register`, data, config);

export const postLogin = (data: LoginParameters) =>
  axios.post(`${REACT_APP_API_HOSTNAME}/auth/login`, data, config);

export const getAuthUser = () =>
  axios.get(`${REACT_APP_API_HOSTNAME}/auth/status`, config);

export const getConversations = () =>
  axios.get(`${REACT_APP_API_HOSTNAME}/conversations`, config);

export const getMessages = (id: number) =>
  axios.get(`${REACT_APP_API_HOSTNAME}/messages/${id}`, config);
export const createMessages = (data: createMessage) =>
  axios.post(`${REACT_APP_API_HOSTNAME}/messages`, data, config);
