import { User } from "@/types/types";
import axios, { AxiosRequestConfig } from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const getUsers = async () => {
  const res = await API.get("/users/");
  return res.data;
};

export const addUser = async (user: User) => {
  return await API.post("/users", user);
};

export const updateUser = async (payload: {
  id: string;
  data: { name: string; email: string; role: string };
}) => {
  const { id, data } = payload;
  return await API.put(`/users/${id}`, data);
};

export const deleteUser = async (id: AxiosRequestConfig) => {
  return await API.delete(`/users/${id}`, id);
};
