"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";
import SignOutLink from "./SignOutLink";
import { useAuth } from "@/app/_context/AuthContext";

function LinksDropdown() {
  const { user } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
        </Button>
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
