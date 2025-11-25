"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoReloadCircleOutline } from "react-icons/io5";

export default function WishlistToggleButton({
  isWishlisted,
}: {
  isWishlisted: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="icon"
      variant="outline"
      className={`flex items-center justify-center rounded-full bg-shop_glass p-2 border-none                   
                   hover:bg-shop_dark_green hover:text-white hover:border-shop_dark_green
                    hoverEffect ${
                      isWishlisted
                        ? "text-white bg-shop_dark_green border-none"
                        : ""
                    }`}
    >
      {pending ? (
        <IoReloadCircleOutline className="animate-spin" />
      ) : isWishlisted ? (
        <FaHeart />
      ) : (
        <FaRegHeart className="text-white" />
      )}
    </Button>
  );
}
