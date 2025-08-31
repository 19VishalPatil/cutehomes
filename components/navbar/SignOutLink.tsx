"use client";

import { logoutUser } from "@/lib/api/auth";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/_context/AuthContext";

export default function SignOutLink() {
  const { resetUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await logoutUser();
      resetUser();
      toast.success("Logged out successfully");
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error during logout:", error);
        toast.error(error.message);
      } else {
        console.error("Error during logout:", error);
        toast.error("Failed to logout");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={loading}
      className="cursor-pointer w-full text-left"
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}
