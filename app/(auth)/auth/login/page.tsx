"use client";

import { useAuth } from "@/app/_context/AuthContext";
import LoginForm from "@/components/auth/LoginForm";
import { Spinner } from "@/components/global/LoadingSpinner";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { toast } from "sonner";

// Outer component only wraps in Suspense
export default function LoginPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const { user, loading } = useAuth();
  const router = useRouter();

  console.log(user);

  useEffect(() => {
    if (!loading && user) {
      router.replace("/"); // Already logged in
    }
  }, [user, loading, router]);

  useEffect(() => {
    const msg = searchParams.get("message");
    if (!msg) return;

    switch (msg) {
      case "registered":
        toast.success("Registration successful. Please login.");
        break;
      case "login_required":
        toast.error("Please login to access this page");
        break;
      case "admin_required":
        toast.error("Admin access required to view this page");
        break;
      case "customer_required":
        toast.error("Authenticated Customer can view this page");
        break;
    }
  }, [searchParams]);

  if (loading) return <Spinner />;

  return (
    <div className="w-full max-w-md px-6">
      <LoginForm callbackUrl={callbackUrl} />
    </div>
  );
}
