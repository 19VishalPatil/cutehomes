"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HiSearch } from "react-icons/hi";
import { SidebarTrigger } from "@/components/ui/sidebar";
import DarkMode from "./DarkMode";
import CartButton from "./CartButton";
import Logo from "./Logo";
import { SearchBar } from "./SearchBar";
import Container from "../global/Container";
import LinksDropdown from "./LinksDropdown";
import { usePathname } from "next/navigation";
import FavoriteButton from "./FavoriteButton";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Shop" },
];

export default function Navbar() {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const pathName = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Left section */}
          <div className="flex items-center space-x-6">
            <SidebarTrigger className="-ml-1 cursor-pointer" />

            <nav className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-shop_light_green hoverEffect relative group ${
                    pathName === link.href && "text-shop_light_green"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 hoverEffect group-hover:left-0 ${
                      pathName === link.href && "w-1/2"
                    }`}
                  ></span>
                  <span
                    className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green
                  group-hover:w-1/2 hoverEffect group-hover:right-0 ${
                    pathName === link.href && "w-1/2"
                  }`}
                  ></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Center - Logo */}
          <Logo />

          {/* Right section */}
          <div className="flex items-center space-x-3">
            <div className="hidden lg:block">
              <SearchBar />
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="lg:hidden h-10 w-10 p-0 hover:bg-gray-100"
            >
              <HiSearch className="h-5 w-5" />
            </Button>

            <DarkMode />
            <CartButton />
            <FavoriteButton />
            <LinksDropdown />
          </div>
        </div>

        {/* Mobile search */}
        {mobileSearchOpen && (
          <div className="lg:hidden py-3 border-t">
            <SearchBar />
          </div>
        )}
      </Container>
    </header>
  );
}
