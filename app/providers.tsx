"use client";
import { ThemeProvider } from "@/app/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "./_context/AuthContext";
import { User } from "@/lib/api/types/customerTypes/customerTypes";

export default function Providers({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AuthProvider user={user}>{children}</AuthProvider>
      </ThemeProvider>
    </>
  );
}
