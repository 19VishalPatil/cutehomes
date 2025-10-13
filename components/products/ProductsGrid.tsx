"use client";

import { Item } from "@/lib/api/types/itemTypes/item";
import SingleProduct from "./SingleProduct";
import CategoryBar from "./CategoryBar";
import { useEffect, useState } from "react";
import { itemService } from "@/lib/api/items";

export default function ProductsGrid() {
  const [products, setProducts] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState("All");
  const [error, setError] = useState<string | null>(null);

  const fetchItems = async (category: string) => {
    try {
      setLoading(true);
      setError(null);

      // Build query parameters
      const queryParams = {
        page: 1,
        limit: 10,  
        filter:
          category !== "All"
            ? { "categories.name": { ilike: category } }
            : undefined,
      };

      const response = await itemService.getAll({}, queryParams);
      setProducts(response.data.items);
    } catch {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(selectedTab);
  }, [selectedTab]);

  return (
    <>
      <CategoryBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => {
          const { id, name, media, sellingPrice, slug, isWishlisted } = item;
          const mediaImage = media.filter((m) => m.mime.startsWith("image/"))[0]
            ?.path;

          return (
            <SingleProduct
              key={id}
              id={id}
              name={name}
              slug={slug}
              mediaImage={mediaImage}
              price={sellingPrice}
              isWishlisted={isWishlisted}
            />
          );
        })}
      </div>
    </>
  );
}
