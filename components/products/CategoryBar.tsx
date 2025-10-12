import Link from "next/link";

interface CategoryBarPops {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

export default function CategoryBar({
  selectedTab,
  onTabSelect,
}: CategoryBarPops) {
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
    <div className="flex items-center justify-between flex-wrap gap-5 mt-12">
      <div className="flex items-center gap-3 text-sm font-semibold">
        <button
          className={`border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect ${
            selectedTab === "All"
              ? "bg-shop_light_green text-white border-shop_light_green"
              : ""
          }`}
          onClick={() => onTabSelect("All")}
        >
          All
        </button>
        {categories.map((cat) => {
          return (
            <button
              key={cat.id}
              className={`border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect ${
                selectedTab === cat.name
                  ? "bg-shop_light_green text-white border-shop_light_green"
                  : ""
              }`}
              onClick={() => onTabSelect(cat.name)}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      <Link
        href={"/products"}
        className={`border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect`}
      >
        See All
      </Link>
    </div>
  );
}
