import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { cookies } from "next/headers";
import { authService } from "@/lib/api/auth";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  let user = null;
  if (accessToken) {
    try {
      const res = await authService.me({
        Authorization: `Bearer ${accessToken}`,
      });
      user = res.data;
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefin.className}  antialiased`}>
        <Providers user={user}>{children}</Providers>
      </body>
    </html>
  );
}
