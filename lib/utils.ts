import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PaginationOptions } from "./api/types/itemTypes/item";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildQueryString(options?: PaginationOptions): string {
  if (!options) return "";

  const params = new URLSearchParams();

  if (options.page) params.append("page", options.page.toString());
  if (options.limit) params.append("limit", options.limit.toString());
  if (options.sort) params.append("sortBy", options.sort);

  if (options.search) params.append("search", options.search);

  if (options.filter) {
    for (const [key, condition] of Object.entries(options.filter)) {
      for (const [op, value] of Object.entries(condition)) {
        params.append(`filter.${key}`, `$${op}:${value}`);
      }
    }
  }

  return params.toString();
}
