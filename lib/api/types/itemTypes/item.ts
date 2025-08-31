import { Category } from "./category";
import { ItemMedia } from "./itemMedia";

export interface Item {
  id: number;
  name: string;
  slug: string;
  description?: string;
  media: ItemMedia[];
  buyingPrice: number;
  sellingPrice: number;
  hsnOrSacCode?: string;
  barcode?: string;
  categories: Category[];
  createdAt: string;
  updatedAt: string;
}
