import api from "./axios";
import { ApiResponse, request } from "./_request";
import { Item, PaginationOptions } from "./types/itemTypes/item";
import {
  defaultPaginatedResponse,
  PaginatedResponse,
} from "./types/itemTypes/PaginatedResponse";
import qs from "qs";

export const itemService = {
  getAll: async (
    headers?: Record<string, string>,
    options?: PaginationOptions
  ): Promise<ApiResponse<PaginatedResponse<Item>>> => {
    const query = qs.stringify(options, { encodeValuesOnly: true });

    return request(
      api.get(`/items?${query}`, {
        headers: {
          ...headers,
        },
      }),
      defaultPaginatedResponse
    );
  },

  getOne: async (id: string): Promise<ApiResponse<Item>> =>
    request(api.get(`/items/${id}`), {} as Item),

  getBySlug: async (
    slug: string,
    headers?: Record<string, string>
  ): Promise<ApiResponse<Item>> =>
    request(
      api.get(`/items/slug/${slug}`, {
        headers: {
          ...headers,
        },
      }),
      {} as Item
    ),

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
