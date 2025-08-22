"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  HiHome,
  HiSearch,
  HiHeart,
  HiShoppingBag,
  HiUser,
} from "react-icons/hi";

const mobileNavItems = [
  { href: "/", icon: HiHome, label: "Home" },
  { href: "/search", icon: HiSearch, label: "Search" },
  { href: "/wishlist", icon: HiHeart, label: "Wishlist" },
  { href: "/profile", icon: HiUser, label: "Profile" },
  { href: "/cart", icon: HiShoppingBag, label: "Cart" },
];

export function MobileNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
      <div className="grid grid-cols-5 gap-1 py-2">
        {mobileNavItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                size="sm"
                className="flex flex-col items-center space-y-1 h-auto py-2 px-1"
              >
                <IconComponent className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
