"use client";

import WishlistToggleForm from "./WishlistToggleForm";
import { Button } from "../ui/button";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { useAuth } from "@/app/_context/AuthContext";

export default function WishlistWrapper({
  productId,
  isWishlisted,
}: {
  productId: number;
  isWishlisted: boolean;
}) {
  const { isSessionActive } = useAuth();

  if (!isSessionActive)
    return (
      <Button
        type="button"
        size="icon"
        variant="outline"
        className="p-2 cursor-pointer"
        asChild
      >
        <Link href={"/auth/login"}>
          <FaRegHeart />
        </Link>
      </Button>
    );

  return (
    <WishlistToggleForm productId={productId} isWishlisted={isWishlisted} />
  );
}
