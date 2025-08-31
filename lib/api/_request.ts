/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";

export interface ApiResponse<T> {
  data: T;
  error?: string;
  success: boolean;
  status: number;
}

export async function request<T>(
  promise: Promise<AxiosResponse<T>>,
  defaultData: T
): Promise<ApiResponse<T>> {
  try {
    const { data, status } = await promise;
    return {
      data,
      success: true,
      status,
    };
  } catch (error: any) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Something went wrong";

    return {
      data: defaultData,
      success: false,
      error: message,
      status: error.response?.status ?? 500,
    };
  }
}
