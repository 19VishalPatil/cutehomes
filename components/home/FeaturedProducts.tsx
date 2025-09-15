import SectionTitle from "@/components/global/SectionTitle";
import ProductsSlider from "@/components/products/ProductSlider";
import ViewAll from "@/components/global/ViewAll";
import EmptyList from "../global/EmptyList";

import { Item } from "@/lib/api/types/itemTypes/item";

export default async function FeaturedProducts({
  products,
}: {
  products: Item[];
}) {
  if (products.length === 0) return <EmptyList />;

  //temp

  const featuredProducts = products.slice(0, 5);

  return (
    <section className="pt-20">
      <SectionTitle text="featured products" />
      <ProductsSlider items={featuredProducts} />
      <ViewAll />
    </section>
  );
}
