import { Item } from "@/lib/api/types/itemTypes/item";
import SingleProduct from "./SingleProduct";

export default function ProductsGrid({ items }: { items: Item[] }) {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const { id, name, media, sellingPrice, slug } = item;
        const mediaImage = media.filter((m) => m.mime.startsWith("image/"))[0]
          ?.path;

        return (
          <SingleProduct
            key={id}
            id={id}
            name={name}
            slug={slug}
            mediaImage={mediaImage}
            price={sellingPrice}
          />
        );
      })}
    </div>
  );
}
