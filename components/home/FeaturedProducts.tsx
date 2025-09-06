import SectionTitle from "@/components/global/SectionTitle";
import ProductsSlider from "@/components/products/ProductSlider";
import ViewAll from "@/components/global/ViewAll";
import EmptyList from "../global/EmptyList";
import { itemService } from "@/lib/api/items";

export default async function FeaturedProducts() {
  const products = (await itemService.getAll()).data;

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
