import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const prometheus = axios.create({
  baseURL: process.env.PROMETHEUS_URL,
  timeout: 5000,
});
