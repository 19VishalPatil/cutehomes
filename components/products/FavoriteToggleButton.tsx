import { Button } from "@/components/ui/button";
import { FaHeart } from "react-icons/fa";

export default function FavoriteToggleButton({
  productId,
}: {
  productId: number;
}) {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
}
