import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { formatCurrency } from "@/utils/format";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";
import Container from "@/components/global/Container";
import SingleProductCarousel from "@/components/single-product/SingleProductCarousel";
import { itemService } from "@/lib/api/items";
import { getSession } from "@/lib/session";
import WishlistWrapper from "@/components/products/WishlistWrapper";

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

  const { id, name, media, description, sellingPrice, isWishlisted } =
    product.data;

  const dollarsAmount = formatCurrency(sellingPrice);
  return (
    <Container>
      <section className="pt-20">
        <BreadCrumbs name={name} />
        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
          {/* Media FIRST COL */}
          <div className="relative h-full">
            <SingleProductCarousel mediaName={name} media={media} />
          </div>
          {/* PRODUCT INFO SECOND COL */}
          <div>
            <div className="flex gap-x-8 items-center">
              <h1 className="capitalize text-3xl font-bold">{name}</h1>
              <WishlistWrapper productId={id} isWishlisted={isWishlisted} />
            </div>
            <ProductRating productId={id} />

            <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
              {dollarsAmount}
            </p>
            <p className="mt-6 leading-8 text-muted-foreground">
              {description}
            </p>
            <AddToCart productId={id} />
          </div>
        </div>
      </section>
    </Container>
  );
}
export default SingleProductPage;
