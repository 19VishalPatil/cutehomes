import Container from "@/components/global/Container";
import ProductsContainer from "@/components/products/ProductsContainer";

export const revalidate = 0;

export default function ProductsPage() {
  return (
    <Container>
      <ProductsContainer />
    </Container>
  );
}
