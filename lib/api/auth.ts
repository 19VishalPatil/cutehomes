import { request } from "./_request";
import api from "./axios";
import { Customer } from "./types/customerTypes/customerTypes";

export const registerCustomer = async (data: Customer) => {
  const res = await request<{ data: Customer }>(
    api.post("/auth/customer/register", data),
    { data: {} as Customer }
  );
  return {
    ...res,
    data: res.data.data,
  };
};

export const loginUser = async (data: { email: string; password: string }) => {
  const res = await request<{ data: Customer }>(api.post("/auth/login", data), {
    data: {} as Customer,
  });
  return {
    ...res,
    data: res.data.data,
  };
};

export const logoutUser = async () => {
  const res = await request<{ data: null }>(api.post("/auth/logout"), {
    data: null,
  });

  console.log("Logout response:", res);
  return res.data.data;
};
