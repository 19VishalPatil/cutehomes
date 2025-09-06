/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
  errors?: Record<string, string>;
  status: number;
}

export async function request<T>(
  promise: Promise<AxiosResponse<T>>,
  defaultData: T
): Promise<ApiResponse<T>> {
  try {
    const { data, status } = await promise;

    const payload = (data as any)?.data ?? data;

    return {
      data: payload,
      success: true,
      status,
    };
  } catch (error: any) {
    console.log(error.response);

    const responseData = error.response?.data;

    if (responseData?.errors) {
      return {
        data: defaultData,
        success: false,
        errors: responseData.errors,
        status: error.response?.status ?? 400,
      };
    }

    return {
      data: defaultData,
      success: false,
      error:
        responseData?.message ||
        responseData?.error ||
        error.message ||
        "Something went wrong",
      status: error.response?.status ?? 500,
    };
  }
}
