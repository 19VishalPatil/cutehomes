import { itemService } from "@/lib/api/items";
import { Separator } from "../ui/separator";
import ProductsGrid from "./ProductsGrid";
import { getSession } from "@/lib/session";

export default async function ProductsContainer() {
  // get access token
  const accessToken = await getSession();

  const result = await itemService.getAll({
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  });
  const products = result.data.items;
  const totalProducts: number = result.data.meta.totalItems;

  return (
    <>
      {/* HEADER */}
      <section className="pt-20">
        <div className="flex justify-between products-center">
          <h4 className="font-medium text-lg">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
        </div>
        <Separator className="mt-4" />
      </section>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : (
          <ProductsGrid items={products} />
        )}
      </div>
    </>
  );
}
