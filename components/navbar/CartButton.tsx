import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CartButton() {
  //temp
  const numItemsInCart = 9;

  return (
    <Link href="/cart" className="group relative">
      <ShoppingCart className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-shop_dark_green text-white w-3.5 h-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
        {numItemsInCart}
      </span>
    </Link>
  );
}
