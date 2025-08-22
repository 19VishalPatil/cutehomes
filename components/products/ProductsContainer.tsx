import { Separator } from "../ui/separator";
import ProductsGrid from "./ProductsGrid";

import { getItems } from "@/lib/api/items";

export default async function ProductsContainer() {
  const products = await getItems();
  const totalProducts: number = products.data.length;

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
          <ProductsGrid items={products.data} />
        )}
      </div>
    </>
  );
}
