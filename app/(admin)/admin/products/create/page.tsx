import CreateProductForm from "@/components/products/CreateProductForm";
import { categoryService } from "@/lib/api/category";

export const revalidate = 0;

export default async function CreateProductPage() {
  const categories = (await categoryService.getAll()).data;

  return <CreateProductForm categories={categories} />;
}
