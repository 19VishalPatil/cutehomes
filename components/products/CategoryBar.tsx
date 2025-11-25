"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCat = searchParams.get("category") || "all";

  const handleCategory = (category: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (category === "all") {
      newParams.delete("category");
    } else {
      newParams.set("category", category);
    }

    router.push(`/?${newParams}`, { scroll: false });
  };

  const categories = [
    {
      id: 2,
      name: "Metal cars",
    },
    {
      id: 3,
      name: "Keychains",
    },
    {
      id: 4,
      name: "Ceramic Mugs",
    },
    {
      id: 5,
      name: "Glass Mugs",
    },
  ];

  if (categories.length === 0) return null;

  return (
    <div className="flex items-center justify-between flex-wrap gap-5 overflow-auto">
      <div className="flex items-center gap-3 text-sm font-semibold">
        <button
          className={`border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white whitespace-nowrap hoverEffect 
            ${
              currentCat === "all"
                ? "bg-shop_light_green text-white border-shop_light_green"
                : ""
            }`}
          onClick={() => handleCategory("all")}
        >
          All
        </button>
        {categories.map((cat) => {
          return (
            <button
              key={cat.id}
              className={`border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white whitespace-nowrap  hoverEffect 
                  ${
                    currentCat === cat.name
                      ? "bg-shop_light_green text-white border-shop_light_green"
                      : ""
                  }
                `}
              onClick={() => handleCategory(cat.name)}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      <Link
        href={"/products"}
        className={`border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect hidden lg:block`}
      >
        See All
      </Link>
    </div>
  );
}
