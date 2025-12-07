import ProductCardSkeleton from "../products/ProductCardSkeleton";

function LoadingContainer() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 mt-10">
      {Array.from({ length: 10 }, (_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default LoadingContainer;
