/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./axios";
import { request } from "./_request";
import { Item } from "./types/itemTypes/item";
import { ApiResponse } from "./types/api";

export const getItems = () => request<ApiResponse<Item[]>>(api.get("/items"));

export const getItem = (id: string) =>
  request<ApiResponse<Item>>(api.get(`/items/${id}`));

export const createItem = (data: Partial<Item>) =>
  request<ApiResponse<Item>>(api.post("/items", data));

export const updateItem = (id: string, data: Partial<Item>) =>
  request<ApiResponse<Item>>(api.patch(`/items/${id}`, data));

export const deleteItem = (id: number) =>
  request<ApiResponse<void>>(api.delete(`/items/${id}`));
