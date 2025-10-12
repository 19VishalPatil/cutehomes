type NavItem = {
  title: string;
  url: string;
  items?: NavItem[];
  isActive?: boolean;
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
    title: "Wishlist",
    url: "/wishlist",
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

export const adminLinks = [
  { href: "/admin/sales", label: "Sales" },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/products/create", label: "Create Products" },
];

export const quickLinksData = [
  { title: "About us", href: "/about" },
  { title: "Contact us", href: "/contact" },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "FAQs", href: "/faqs" },
  { title: "Help", href: "/help" },
];

export const categoriesData = [
  { title: "Metal Cars", href: "/products?metalcars" },
  { title: "Keychains", href: "/products?keychins" },
  { title: "Ceramic Mugs", href: "/products?ceramicmugs" },
  { title: "Glass Mugs", href: "/products?glassmugs" },
];
