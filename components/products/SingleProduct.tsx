import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import WishlistWrapper from "./WishlistWrapper";

export default function SingleProduct({
  id,
  name,
  slug,
  mediaImage,
  price,
  isWishlisted,
}: {
  id: number;
  name: string;
  slug: string;
  mediaImage: string;
  price: number;
  isWishlisted: boolean;
}) {
  return (
    <article className="group relative">
      <Link href={`/products/${slug || id}`}>
        <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
          <CardContent className="p-4">
            <div className="relative h-64 md:h-48 rounded overflow-hidden">
              <Image
                src={mediaImage}
                alt={name}
                fill
                priority
                className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-muted-foreground text-lg capitalize md:truncate md:whitespace-nowrap md:overflow-hidden">
                {name}
              </h2>

              <p className="font-bold mt-2">&#8377;{price}/-</p>
            </div>
          </CardContent>
        </Card>
      </Link>
      <div className="absolute top-3 right-3 z-5">
        <WishlistWrapper productId={id} isWishlisted={isWishlisted} />
      </div>
    </article>
  );
}
