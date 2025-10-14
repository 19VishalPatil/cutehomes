import api from "./axios";
import { ApiResponse, request } from "./_request";
import { Item, PaginationOptions } from "./types/itemTypes/item";
import {
  defaultPaginatedResponse,
  PaginatedResponse,
} from "./types/itemTypes/PaginatedResponse";
import { buildQueryString } from "../utils";

export const itemService = {
  getAll: async (
    headers?: Record<string, string>,
    options?: PaginationOptions
  ): Promise<ApiResponse<PaginatedResponse<Item>>> => {
    const queryString = buildQueryString(options);

    return request(
      api.get(`/items?${queryString}`, {
        headers: {
          ...headers,
        },
      }),
      defaultPaginatedResponse
    );
  },

  getAllForAdmin: async (
    headers?: Record<string, string>,
    options?: PaginationOptions
  ): Promise<ApiResponse<PaginatedResponse<Item>>> => {
    const queryString = buildQueryString(options);

    return request(
      api.get(`/admin/items?${queryString}`, {
        headers: {
          ...headers,
        },
      }),
      defaultPaginatedResponse
    );
  },

  getOne: async (id: string): Promise<ApiResponse<Item>> =>
    request(api.get(`/items/${id}`), {} as Item),

  getOneForAdmin: async (
    id: string,
    headers?: Record<string, string>
  ): Promise<ApiResponse<Item>> =>
    request(
      api.get(`/admin/items/${id}`, {
        headers: {
          ...headers,
        },
      }),
      {} as Item
    ),

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
      api.post("/admin/items", data, {
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
      api.patch(`/admin/items/${id}`, data, {
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
    request(api.delete(`/admin/items/${id}`, { headers }), null),
};
