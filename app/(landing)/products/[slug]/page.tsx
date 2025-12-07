import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import Container from "@/components/global/Container";
import SingleProductCarousel from "@/components/single-product/SingleProductCarousel";
import { itemService } from "@/lib/api/items";
import { getSession } from "@/lib/session";
import WishlistWrapper from "@/components/products/WishlistWrapper";
import PriceView from "@/components/global/PriceView";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export const revalidate = 0;

async function SingleProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // get access token
  const accessToken = await getSession();

  const { slug } = await params;

  const product = await itemService.getBySlug(slug, {
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  });

  const {
    id,
    name,
    categories,
    media,
    description,
    sellingPrice,
    isWishlisted,
  } = product.data;

  return (
    <Container>
      <section className="pt-20 pb-20 ">
        <BreadCrumbs name={name} />
        <div className="mt-6 md:grid gap-y-8 md:grid-cols-2 md:gap-x-10">
          {/* Media FIRST COL */}
          <div className="w-full mb-5 md:sticky md:top-24 h-fit">
            <SingleProductCarousel mediaName={name} media={media} />
          </div>
          {/* PRODUCT INFO SECOND COL */}
          <div className="w-full flex flex-col gap-5">
            <div className="space-y-2">
              <h1 className="text-2xl">{name}</h1>
              <p className="text-sm text-gray-600 tracking-wide ">
                {categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs border-b border-t border-shop_light_green py-1 px-2 rounded-md text-shop_dark_green mr-2"
                  >
                    {cat}
                  </span>
                ))}
              </p>
            </div>
            <div>
              <PriceView price={sellingPrice} className="text-lg font-bold" />
              <span className="text-xs text-gray-600">
                Price incl. of all taxes
              </span>
            </div>
            <div className="flex items-center justify-between gap-2.5 lg:gap-5">
              <Button className="flex-1 bg-shop_dark_green/80 text-lightBg shadow-none border border-shop_dark_green/80 font-semibold tracking-wide text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect">
                <ShoppingBag /> Add to Cart
              </Button>

              <WishlistWrapper productId={id} isWishlisted={isWishlisted} />
            </div>
            <div>
              <h4 className="mb-2">Product Description:</h4>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
export default SingleProductPage;
