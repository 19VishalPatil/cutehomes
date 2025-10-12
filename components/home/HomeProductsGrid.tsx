import { Item } from "@/lib/api/types/itemTypes/item";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ViewAll from "../global/ViewAll";
import ProductsGrid from "../products/ProductsGrid";

interface HomeProductGridProps {
  products: Item[];
}

export default function HomeProductsGrid({ products }: HomeProductGridProps) {
  if (products.length === 0) return <EmptyList />;

  return (
    <div>
      <section className="pt-20">
        <SectionTitle text="Products" />
        <ProductsGrid />
        <ViewAll className="mt-8" />
      </section>
    </div>
  );
}
