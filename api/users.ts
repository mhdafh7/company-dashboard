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

export const updateUser = async (user: User) => {
  return await API.patch(`/users/${user.id}`, user);
};

export const deleteUser = async (id: AxiosRequestConfig) => {
  return await API.delete(`/users/${id}`, id);
};
