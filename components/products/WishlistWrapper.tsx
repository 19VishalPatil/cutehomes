"use client";

import WishlistToggleForm from "./WishlistToggleForm";
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
      <Link
        href="/auth/login"
        className="flex items-center justify-center rounded-full bg-shop_glass p-2                    
                   hover:bg-shop_dark_green hover:text-white hover:border-shop_dark_green
                   focus:outline-none focus:ring-2 focus:ring-shop_dark_green focus:ring-offset-2 hoverEffect"
      >
        <FaRegHeart size={16} className="text-white" />
      </Link>
    );

  return (
    <WishlistToggleForm productId={productId} isWishlisted={isWishlisted} />
  );
}
