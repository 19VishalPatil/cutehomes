import api from "./axios";
import { request } from "./_request";
import { Category } from "./types/itemTypes/category";

export const getCategories = async () => {
  const res = await request<{ data: Category[] }>(api.get("/categories"), {
    data: [],
  });
  return {
    ...res,
    data: res.data.data, // unwrap so data is Category[]
  };
};

export const getCategory = async (id: string) => {
  const res = await request<{ data: Category }>(api.get(`/categories/${id}`), {
    data: {} as Category,
  });
  return {
    ...res,
    data: res.data.data,
  };
};

export const createCategory = async (data: Partial<Category>) => {
  const res = await request<{ data: Category }>(api.post("/categories", data), {
    data: {} as Category,
  });
  return {
    ...res,
    data: res.data.data,
  };
};

export const updateCategory = async (id: string, data: Partial<Category>) => {
  const res = await request<{ data: Category }>(
    api.patch(`/categories/${id}`, data),
    { data: {} as Category }
  );
  return {
    ...res,
    data: res.data.data,
  };
};

export const deleteCategory = async (id: string) => {
  const res = await request<void>(api.delete(`/categories/${id}`), undefined);
  return res;
};
