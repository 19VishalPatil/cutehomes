import api from "./axios";
import { ApiResponse, request } from "./_request";
import { Item } from "./types/itemTypes/item";

export const itemService = {
  getAll: async (): Promise<ApiResponse<Item[]>> =>
    request(api.get("/items"), []),

  getOne: async (id: string): Promise<ApiResponse<Item>> =>
    request(api.get(`/items/${id}`), {} as Item),

  getBySlug: async (slug: string): Promise<ApiResponse<Item>> =>
    request(api.get(`/items/slug/${slug}`), {} as Item),

  create: async (
    data: Partial<Item> | FormData,
    headers?: Record<string, string>
  ): Promise<ApiResponse<Item>> =>
    request(
      api.post("/items", data, {
        headers: {
          "Content-Type":
            data instanceof FormData
              ? "multipart/form-data"
              : "application/json",
          ...headers,
        },
      }),
      {} as Item
    ),

  update: async (
    id: string,
    data: Partial<Item> | FormData,
    headers?: Record<string, string>
  ): Promise<ApiResponse<Item>> =>
    request(
      api.patch(`/items/${id}`, data, {
        headers: {
          "Content-Type":
            data instanceof FormData
              ? "multipart/form-data"
              : "application/json",
          ...headers,
        },
      }),
      {} as Item
    ),

  delete: async (
    id: number,
    headers?: Record<string, string>
  ): Promise<ApiResponse<null>> =>
    request(api.delete(`/items/${id}`, { headers }), null),
};
