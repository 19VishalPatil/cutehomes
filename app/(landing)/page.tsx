import Container from "@/components/global/Container";
import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroCarousel from "@/components/home/HeroCarousel";
import HomeProductsGrid from "@/components/home/HomeProductsGrid";
import { itemService } from "@/lib/api/items";
import { getSession } from "@/lib/session";
import { Suspense } from "react";

export const revalidate = 0;

interface HomePageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  // get access token
  const accessToken = await getSession();

  const { category } = await searchParams;

  const selectedCategory = category || "all";

  const queryParams = {
    page: 1,
    limit: 10,
    filter:
      selectedCategory !== "all"
        ? { "categories.name": { ilike: selectedCategory } }
        : undefined,
  };

  const result = await itemService.getAll(
    {
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    queryParams
  );
  const products = result.data.items;

  return (
    <>
      <HeroCarousel />
      <Container>
        <Suspense fallback={<LoadingContainer />}>
          <FeaturedProducts products={products} />
        </Suspense>
        <Suspense fallback={<LoadingContainer />}>
          <HomeProductsGrid products={products} />
        </Suspense>
      </Container>
    </>
  );
}
