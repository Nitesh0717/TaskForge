import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getDashboard = async () => {
  const { data } = await api.get("/dashboard/overview");
  return data;
};
