type NavItem = {
  title: string;
  url: string;
  items?: NavItem[];
  isActive?: boolean;
};

type AdminLinks = {
  href: string;
  label: string;
};

export const links: NavItem[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "Favorites",
    url: "/favorites",
  },
  {
    title: "Cart",
    url: "/cart",
  },
  {
    title: "Orders",
    url: "/orders",
  },
  {
    title: "Cars",
    url: "#",
    items: [
      {
        title: "Die-cast",
        url: "#",
      },
      {
        title: "Remote control",
        url: "#",
      },
    ],
  },
  {
    title: "Puzzles",
    url: "#",
    items: [
      {
        title: "Image-puzzle",
        url: "#",
      },
      {
        title: "word puzzle",
        url: "#",
      },
    ],
  },
];

export const adminLinks: AdminLinks[] = [
  { href: "/admin/sales", label: "Sales" },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/products/create", label: "Create Products" },
];
