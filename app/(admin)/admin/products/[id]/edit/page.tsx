import { itemService } from "@/lib/api/items";
import { categoryService } from "@/lib/api/category";
import UpdateProductForm from "@/components/products/UpdateProductForm";
import { getSession } from "@/lib/session";

export const revalidate = 0;

async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // get access token
  const accessToken = await getSession();

  const { id } = await params;
  const product = (
    await itemService.getOneForAdmin(id, {
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    })
  ).data;

  const categories = (await categoryService.getAll()).data;

  return <UpdateProductForm product={product} categories={categories} />;
}
export default EditProductPage;
