import axios from "axios";
import { API_URL } from "./constants";

export const axiosClient = axios.create({
  // baseURL: "http://localhost:3009",
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
