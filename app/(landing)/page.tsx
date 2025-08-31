import Container from "@/components/global/Container";
import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroCarousel from "@/components/home/HeroCarousel";
import NewArrivals from "@/components/home/NewArrivals";
import { Suspense } from "react";

export const revalidate = 0;

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <Container>
        <Suspense fallback={<LoadingContainer />}>
          <FeaturedProducts />
        </Suspense>
        <Suspense fallback={<LoadingContainer />}>
          <NewArrivals />
        </Suspense>
      </Container>
    </>
  );
}
