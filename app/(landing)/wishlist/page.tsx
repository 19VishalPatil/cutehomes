import Container from "@/components/global/Container";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { wishlistService } from "@/lib/api/wishlist";
import { getSession } from "@/lib/session";

export default async function WishlistPage() {
  // get session
  const accessToken = await getSession();

  const result = await wishlistService.getAll({
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  });

  const favItems = result.data;

  if (favItems.length === 0)
    return <SectionTitle text="You have no favorites yet." />;

  return (
    <section className="pt-20">
      <Container>
        <SectionTitle text="Favorites" />
        <ProductsGrid items={favItems.map((fav) => fav.item)} />
      </Container>
    </section>
  );
}
