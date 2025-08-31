import { getItems } from "@/lib/api/items";
import SectionTitle from "../global/SectionTitle";
import ViewAll from "../global/ViewAll";
import ProductsGrid from "../products/ProductsGrid";
import EmptyList from "../global/EmptyList";

export default async function NewArrivals() {
  const products = await getItems();

  if (products.data.length === 0) return <EmptyList />;

  //temp
  const items = products.data.slice(0, 5);

  return (
    <section className="pt-20">
      <SectionTitle text="new arrivals" />
      <ProductsGrid items={items} />
      <ViewAll className="mt-8" />
    </section>
  );
}
