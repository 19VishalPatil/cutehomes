export default function ProductCardSkeleton() {
  return (
    <div className="relative text-sm border border-dark_blue/20 rounded-md animate-pulse">
      {/* Wishlist Icon Placeholder */}
      <div className="absolute top-2 right-2 z-10 w-6 h-6 bg-gray-300 rounded-full" />

      {/* Image Skeleton */}
      <div className="relative w-full h-64 sm:aspect-square sm:h-auto rounded-t overflow-hidden bg-gray-200" />

      {/* Text Content */}
      <div className="p-3 flex flex-col gap-2">
        {/* Category */}
        <div className="h-3 w-24 bg-gray-300 rounded" />

        {/* Title */}
        <div className="h-4 w-32 bg-gray-300 rounded" />

        {/* Price */}
        <div className="h-4 w-20 bg-gray-300 rounded" />
      </div>
    </div>
  );
}
