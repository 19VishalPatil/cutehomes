import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Cute Homes | Buy Toys, Die-Cast Cars, Gifts & More",
    default: "Cute Homes | Buy Toys, Die-Cast Cars, Gifts & More",
  },
  description:
    "Shop online at Cute Homes for die-cast cars, trending toys, soft toys, and gift ideas for all occasions. Perfect for collectors, kids, and gifting!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefin.className}  antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
