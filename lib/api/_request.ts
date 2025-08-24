/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";

export async function request<T>(
  promise: Promise<AxiosResponse<T>>
): Promise<T> {
  try {
    const { data } = await promise;
    return data;
  } catch (error: any) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Something went wrong";
    console.log(error);
    throw new Error(message);
  }
}
