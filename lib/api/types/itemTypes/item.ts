import { Category } from "./category";
import { ItemMedia } from "./itemMedia";

export interface Item {
  id: number;
  name: string;
  slug: string;
  description?: string;
  media: ItemMedia[];
  buyingPrice?: number;
  sellingPrice: number;
  hsnOrSacCode?: string;
  barcode?: string;
  categories: string[];
  createdAt?: string;
  updatedAt?: string;
  isWishlisted: boolean;
}

export interface AdminItem extends Omit<Item, "categories"> {
  categories: Category[];
}

export interface FilterOptions {
  [key: string]: Record<string, string | number>;
}

export interface PaginationOptions {
  page?: number;
  limit?: number;
  sort?: string;
  search?: string;
  filter?: FilterOptions;
}
