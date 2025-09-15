"use client";

import { toggleWishlistAction } from "@/utils/productActions";
import FormContainer from "../form/FormContainer";
import WishlistToggleButton from "./WishlistToggleButton";

export default function WishlistToggleForm({
  productId,
  isWishlisted,
}: {
  productId: number;
  isWishlisted: boolean;
}) {
  return (
    <FormContainer action={toggleWishlistAction}>
      {() => (
        <>
          <input type="hidden" name="id" value={productId} />
          <input
            type="hidden"
            name="isWishlisted"
            value={isWishlisted ? "true" : "false"}
          />
          <WishlistToggleButton isWishlisted={isWishlisted} />
        </>
      )}
    </FormContainer>
  );
}
