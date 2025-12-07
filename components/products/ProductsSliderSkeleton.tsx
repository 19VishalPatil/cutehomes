import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ProductsSliderSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i}>
          <ProductCardSkeleton />
        </div>
      ))}
    </div>
  );
}
