import {User} from '../types/types';
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://645fcc1bfe8d6fb29e265e8e.mockapi.io/',
});

export const getUsers = async () => {
  const res = await API.get('/users/');
  return res.data;
};

export const addUser = async (user: User) => {
  return await API.post('/users', user);
};

export const updateUser = async (payload: {
  id: string;
  data: {name: string; email: string; role: string};
}) => {
  const {id, data} = payload;
  return await API.put(`/users/${id}`, data);
};

export const deleteUser = async (id: any) => {
  return await API.delete(`/users/${id}`, id);
};
