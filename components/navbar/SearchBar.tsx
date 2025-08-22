"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HiSearch } from "react-icons/hi";

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex items-center max-w-md w-full"
    >
      <div className="relative flex-1">
        <Input
          type="search"
          placeholder="search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-xs dark:bg-muted"
        />
      </div>
      <Button
        type="submit"
        variant="ghost"
        size="sm"
        className="ml-2 h-10 w-10 p-0 hover:bg-gray-100 rounded-full"
      >
        <HiSearch className="h-5 w-5 text-gray-600" />
      </Button>
    </form>
  );
}
