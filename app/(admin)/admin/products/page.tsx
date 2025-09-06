import EmptyList from "@/components/global/EmptyList";
import { itemService } from "@/lib/api/items";
import ProductDataTable from "@/components/products/ProductDataTable";

export const revalidate = 0;

async function ItemsPage() {
  const res = await itemService.getAll();

  if (!res.success || res.data.length === 0) return <EmptyList />;

  const items = res.data;

  return <ProductDataTable items={items} />;
}

export default ItemsPage;
