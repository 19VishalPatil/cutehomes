"use client";

import { Item } from "@/lib/api/types/itemTypes/item";
import EmptyList from "../global/EmptyList";
import ProductCard from "./ProductCard";
import { AnimatePresence, motion } from "framer-motion";

export default function ProductsGrid({ items }: { items: Item[] }) {
  return (
    <>
      {items.length ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 mt-10">
          {items.map((item) => {
            const {
              id,
              name,
              categories,
              media,
              sellingPrice,
              slug,
              isWishlisted,
            } = item;
            const mediaImage = media.filter((m) =>
              m.mime.startsWith("image/")
            )[0]?.path;

            return (
              <AnimatePresence key={id}>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProductCard
                    key={id}
                    id={id}
                    name={name}
                    slug={slug}
                    mediaImage={mediaImage}
                    price={sellingPrice}
                    isWishlisted={isWishlisted}
                    categories={categories}
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
