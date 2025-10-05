import api from "./axios";
import { ApiResponse, request } from "./_request";
import { User } from "./types/customerTypes/customerTypes";

export const authService = {
  registerCustomer: async (
    data: User,
    headers?: Record<string, string>
  ): Promise<ApiResponse<User>> =>
    request(api.post("/auth/customer/register", data, { headers }), {} as User),

  login: async (credentials: {
    email: string;
    password: string;
  }): Promise<ApiResponse<User>> =>
    request(api.post("/auth/login", credentials), {} as User),

  me: async (headers?: Record<string, string>): Promise<ApiResponse<User>> =>
    request(api.get("/auth/me", { headers }), {} as User),

  logout: async (): Promise<ApiResponse<null>> =>
    request(api.post("/auth/logout"), null),
};
