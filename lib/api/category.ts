import api from "./axios";
import { request } from "./_request";
import { Category } from "./types/itemTypes/category";
import { ApiResponse } from "./types/api";

export const getCategories = () =>
  request<ApiResponse<Category[]>>(api.get("/categories"));

export const getCategory = (id: string) =>
  request<ApiResponse<Category>>(api.get(`/categories/${id}`));

export const createCategory = (data: Partial<Category>) =>
  request<ApiResponse<Category>>(api.post("/categories", data));

export const updateCategory = (id: string, data: Partial<Category>) =>
  request<ApiResponse<Category>>(api.patch(`/categories/${id}`, data));

export const deleteCategory = (id: string) =>
  request<ApiResponse<void>>(api.delete(`/categories/${id}`));
