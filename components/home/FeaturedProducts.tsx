import SectionTitle from "@/components/global/SectionTitle";
import ProductsSlider from "@/components/products/ProductSlider";
import ViewAll from "@/components/global/ViewAll";
import EmptyList from "../global/EmptyList";

import { getSession } from "@/lib/session";
import { itemService } from "@/lib/api/items";

export default async function FeaturedProducts() {
  // get access token
  const accessToken = await getSession();

  const result = await itemService.getAll({
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  });
  const products = result.data.items;

  if (products.length === 0) return <EmptyList />;

  //temp

  const featuredProducts = products.slice(0, 5);

  return (
    <>
      <ProductsSlider items={featuredProducts} />
      <ViewAll />
    </>
  );
}
