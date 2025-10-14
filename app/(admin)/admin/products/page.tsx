import EmptyList from "@/components/global/EmptyList";
import { itemService } from "@/lib/api/items";
import ProductDataTable from "@/components/products/ProductDataTable";
import { getSession } from "@/lib/session";

export const revalidate = 0;

async function ItemsPage() {
  const accessToken = await getSession();

  const res = await itemService.getAllForAdmin({
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  });

  if (!res.success || res.data.items.length === 0) return <EmptyList />;

  const items = res.data.items;

  return <ProductDataTable items={items} />;
}

export default ItemsPage;
