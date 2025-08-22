import { Button } from "../ui/button";

export default function AddToCart({ productId }: { productId: string }) {
  return (
    <Button
      className="capitalize mt-8 cursor-pointer"
      size="lg"
      variant="outline"
    >
      add to cart
    </Button>
  );
}
