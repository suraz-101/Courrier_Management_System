import axios from "axios";
import { BASE_URL } from "../contants";
import { getToken } from "./session";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { token: getToken("token") },
});

export default instance;
