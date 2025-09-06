import api from "./axios";
import { ApiResponse, request } from "./_request";
import { Category } from "./types/itemTypes/category";

export const categoryService = {
  getAll: async (): Promise<ApiResponse<Category[]>> =>
    request(api.get("/categories"), []),

  getOne: async (id: string): Promise<ApiResponse<Category>> =>
    request(api.get(`/categories/${id}`), {} as Category),

  create: async (data: Partial<Category>): Promise<ApiResponse<Category>> =>
    request(api.post("/categories", data), {} as Category),

  update: async (
    id: string,
    data: Partial<Category>
  ): Promise<ApiResponse<Category>> =>
    request(api.patch(`/categories/${id}`, data), {} as Category),

  delete: async (id: string): Promise<ApiResponse<null>> =>
    request(api.delete(`/categories/${id}`), null),
};
