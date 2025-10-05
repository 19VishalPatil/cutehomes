"use client";

import LoginForm from "@/components/auth/LoginForm";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function LoginWrapper() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

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

  return (
    <div className="w-full max-w-md px-6">
      <LoginForm callbackUrl={callbackUrl} />
    </div>
  );
}
