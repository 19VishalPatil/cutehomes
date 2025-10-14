"use client";

import { Item } from "@/lib/api/types/itemTypes/item";
import SingleProduct from "./SingleProduct";
import CategoryBar from "./CategoryBar";
import { useEffect, useState } from "react";
import { itemService } from "@/lib/api/items";
import LoadingContainer from "../global/LoadingContainer";
import EmptyList from "../global/EmptyList";
import { AnimatePresence, motion } from "framer-motion";

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
      {loading ? (
        <LoadingContainer />
      ) : products.length ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
          {products.map((item) => {
            const { id, name, media, sellingPrice, slug, isWishlisted } = item;
            const mediaImage = media.filter((m) =>
              m.mime.startsWith("image/")
            )[0]?.path;

            return (
              <AnimatePresence key={item.id}>
                <motion.div>
                  <SingleProduct
                    key={id}
                    id={id}
                    name={name}
                    slug={slug}
                    mediaImage={mediaImage}
                    price={sellingPrice}
                    isWishlisted={isWishlisted}
                  />
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
}
