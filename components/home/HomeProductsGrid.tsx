import EmptyList from "../global/EmptyList";
import ViewAll from "../global/ViewAll";
import ProductsGrid from "../products/ProductsGrid";
import { getSession } from "@/lib/session";
import { itemService } from "@/lib/api/items";

interface HomeProductGridProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function HomeProductsGrid({
  searchParams,
}: HomeProductGridProps) {
  // get access token
  const accessToken = await getSession();

  const { category } = await searchParams;

  const selectedCategory = category || "all";

  const queryParams = {
    page: 1,
    limit: 10,
    filter:
      selectedCategory !== "all"
        ? { "categories.name": { ilike: selectedCategory } }
        : undefined,
  };

  const result = await itemService.getAll(
    {
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    queryParams
  );
  const products = result.data.items;

  if (products.length === 0) return <EmptyList />;

  return (
    <div>
      <ProductsGrid items={products} />
      <ViewAll className="mt-8" />
    </div>
  );
}
