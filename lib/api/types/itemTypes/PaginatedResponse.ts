import { Item } from "./item";

export interface PaginatedResponse<T> {
  items: T[];
  meta: {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
    sortBy: [string, "ASC" | "DESC"][];
  };
  links: {
    current: string;
    next?: string;
    prev?: string;
    last: string;
  };
}

export const defaultPaginatedResponse: PaginatedResponse<Item> = {
  items: [],
  meta: {
    itemsPerPage: 0,
    totalItems: 0,
    currentPage: 0,
    totalPages: 0,
    sortBy: [],
  },
  links: {
    current: "",
    next: undefined,
    prev: undefined,
    last: "",
  },
};
