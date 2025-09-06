import { itemService } from "@/lib/api/items";
import { categoryService } from "@/lib/api/category";
import UpdateProductForm from "@/components/products/UpdateProductForm";

export const revalidate = 0;

async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = (await itemService.getOne(id)).data;

  const categories = (await categoryService.getAll()).data;

  return <UpdateProductForm product={product} categories={categories} />;
}
export default EditProductPage;
