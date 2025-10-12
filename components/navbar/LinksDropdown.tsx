"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import SignOutLink from "./SignOutLink";
import { useAuth } from "@/app/_context/AuthContext";
import { User } from "lucide-react";

function LinksDropdown() {
  const { user } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full group px-0 py-0">
          <User className="w-5 h-5 group-hover:text-shop_light_green hoverEffect" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
        <>
          {!user ? (
            <DropdownMenuItem>
              <Link href="/auth/login" className="w-full">
                Login
              </Link>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem>
              <SignOutLink />
            </DropdownMenuItem>
          )}
          {user && user.role === "admin" && (
            <DropdownMenuItem>
              <Link href="/admin/products">Admin Panel</Link>
            </DropdownMenuItem>
          )}
        </>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;
