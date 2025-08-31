import api from "./axios";
import { request } from "./_request";
import { Item } from "./types/itemTypes/item";

export const getItems = async () => {
  const res = await request<{ data: Item[] }>(api.get("/items"), { data: [] });
  return {
    ...res,
    data: res.data.data,
  };
};

export const getItem = async (id: string) => {
  const res = await request<{ data: Item }>(api.get(`/items/${id}`), {
    data: {} as Item,
  });
  return {
    ...res,
    data: res.data.data,
  };
};

export const getItemBySlug = async (slug: string) => {
  const res = await request<{ data: Item }>(api.get(`/items/slug/${slug}`), {
    data: {} as Item,
  });
  return {
    ...res,
    data: res.data.data,
  };
};

export const createItem = async (data: Partial<Item>) => {
  const res = await request<{ data: Item }>(api.post("/items", data), {
    data: {} as Item,
  });
  return {
    ...res,
    data: res.data.data,
  };
};

export const updateItem = async (id: string, data: Partial<Item>) => {
  const res = await request<{ data: Item }>(api.patch(`/items/${id}`, data), {
    data: {} as Item,
  });
  return {
    ...res,
    data: res.data.data,
  };
};

export const deleteItem = async (id: number) => {
  const res = await request<void>(api.delete(`/items/${id}`), undefined);
  return res;
};
