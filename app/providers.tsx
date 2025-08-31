"use client";
import { ThemeProvider } from "@/app/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "./_context/AuthContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </>
  );
}
