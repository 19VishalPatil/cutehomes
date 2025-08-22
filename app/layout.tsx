import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import Navbar from "@/components/navbar/Navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/navbar/Sidebar";
import Footer from "@/components/footer/Footer";

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
        <Providers>
          <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <SidebarInset>
              <Navbar />

              <div className="flex flex-col min-h-screen">
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </SidebarInset>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
