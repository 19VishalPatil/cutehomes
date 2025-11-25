import Image from "next/image";
import WishlistWrapper from "./WishlistWrapper";
import { Title } from "../global/Text";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  categories: string[];
  slug: string;
  mediaImage: string;
  price: number;
  isWishlisted: boolean;
}

export default function ProductCard({
  id,
  name,
  categories,
  slug,
  mediaImage,
  price,
  isWishlisted,
}: ProductCardProps) {
  return (
    <div className="relative text-sm border-[1px] border-dark_blue/20 rounded-md group">
      <div className="absolute top-2 right-2 z-10">
        <WishlistWrapper productId={id} isWishlisted={isWishlisted} />
      </div>
      <Link href={`/products/${slug}`}>
        <div className="relative w-full h-64 sm:aspect-square sm:h-auto rounded overflow-hidden bg-shop_light_bg">
          <Image
            src={mediaImage}
            alt={name}
            fill
            priority
            className="rounded w-full object-cover transform group-hover:scale-110 transition-transform hoverEffect"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-3 flex flex-col gap-1">
          <p className="uppercase line-clamp-1 text-xs text-shop_light_text">
            {categories.map((cat) => cat).join(", ")}
          </p>
          <Title className="text-darkColor text-sm sm:text-[1rem] line-clamp-1 group-hover:text-shop_dark_green hoverEffect font-semibold">
            {name}
          </Title>
          <span className="text-sm text-darkColor font-semibold group-hover:text-shop_dark_green hoverEffect">
            {formatCurrency(price)}
          </span>
        </div>
      </Link>
    </div>
  );
}
