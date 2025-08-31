import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";
import { getItemBySlug } from "@/lib/api/items";
import Container from "@/components/global/Container";
import SingleProductCarousel from "@/components/single-product/SingleProductCarousel";

export const revalidate = 0;

async function SingleProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getItemBySlug(slug);

  const { id, name, media, description, sellingPrice } = product.data;

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
              <FavoriteToggleButton productId={id} />
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
