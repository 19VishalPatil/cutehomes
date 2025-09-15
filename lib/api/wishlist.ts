import { ApiResponse, request } from "./_request";
import api from "./axios";
import { Wishlist } from "./types/wishlistTypes/wishlist";
import { WishlistAddResponse } from "./types/wishlistTypes/wishlistAddResponse";

export const wishlistService = {
  getAll: async (
    headers?: Record<string, string>
  ): Promise<ApiResponse<Wishlist[]>> =>
    request(api.get("/wishlist", { headers }), []),

  add: async (
    id: string,
    headers?: Record<string, string>
  ): Promise<ApiResponse<WishlistAddResponse>> =>
    request(api.post(`/wishlist/${id}`, {}, { headers }), {
      message: "",
      data: null,
    }),

  remove: async (
    id: string,
    headers?: Record<string, string>
  ): Promise<ApiResponse<null>> =>
    request(api.delete(`/wishlist/${id}`, { headers }), null),
};
