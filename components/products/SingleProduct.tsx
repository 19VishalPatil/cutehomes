import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

export default function SingleProduct({
  id,
  name,
  mediaImage,
  price,
}: {
  id: number;
  name: string;
  mediaImage: string;
  price: number;
}) {
  return (
    <article className="group relative">
      <Link href={`/products/${id}`}>
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
        <FavoriteToggleButton productId="1" />
      </div>
    </article>
  );
}
