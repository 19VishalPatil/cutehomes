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
      className="p-2 cursor-pointer"
    >
      {pending ? (
        <IoReloadCircleOutline className="animate-spin" />
      ) : isWishlisted ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
}
