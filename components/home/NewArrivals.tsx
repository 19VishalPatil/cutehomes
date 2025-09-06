import SectionTitle from "../global/SectionTitle";
import ViewAll from "../global/ViewAll";
import ProductsGrid from "../products/ProductsGrid";
import EmptyList from "../global/EmptyList";
import { itemService } from "@/lib/api/items";

export default async function NewArrivals() {
  const products = (await itemService.getAll()).data;

  if (products.length === 0) return <EmptyList />;

  //temp
  const items = products.slice(0, 5);

  return (
    <section className="pt-20">
      <SectionTitle text="new arrivals" />
      <ProductsGrid items={items} />
      <ViewAll className="mt-8" />
    </section>
  );
}
