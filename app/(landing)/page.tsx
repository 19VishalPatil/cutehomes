import Container from "@/components/global/Container";
import LoadingContainer from "@/components/global/LoadingContainer";
import SectionTitle from "@/components/global/SectionTitle";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroCarousel from "@/components/home/HeroCarousel";
import HomeProductsGrid from "@/components/home/HomeProductsGrid";
import CategoryBar from "@/components/products/CategoryBar";
import ProductsSliderSkeleton from "@/components/products/ProductsSliderSkeleton";
import { Suspense } from "react";

export const revalidate = 0;

interface HomePageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  return (
    <>
      <HeroCarousel />
      <Container>
        <section className="pt-20">
          <SectionTitle text="featured products" />
          <Suspense fallback={<ProductsSliderSkeleton />}>
            <FeaturedProducts />
          </Suspense>
        </section>
        <section className="pt-20">
          <SectionTitle text="Products" />
          <CategoryBar />
          <Suspense fallback={<LoadingContainer />}>
            <HomeProductsGrid searchParams={searchParams} />
          </Suspense>
        </section>
      </Container>
    </>
  );
}
