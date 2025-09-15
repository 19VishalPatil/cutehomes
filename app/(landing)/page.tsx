import Container from "@/components/global/Container";
import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroCarousel from "@/components/home/HeroCarousel";
import NewArrivals from "@/components/home/NewArrivals";
import { itemService } from "@/lib/api/items";
import { getSession } from "@/lib/session";
import { Suspense } from "react";

export const revalidate = 0;

export default async function HomePage() {
  // get access token
  const accessToken = await getSession();

  const result = await itemService.getAll({
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  });
  const products = result.data.items;
  return (
    <>
      <HeroCarousel />
      <Container>
        <Suspense fallback={<LoadingContainer />}>
          <FeaturedProducts products={products} />
        </Suspense>
        <Suspense fallback={<LoadingContainer />}>
          <NewArrivals products={products} />
        </Suspense>
      </Container>
    </>
  );
}
