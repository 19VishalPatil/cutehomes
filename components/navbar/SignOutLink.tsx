"use client";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/_context/AuthContext";
import { authService } from "@/lib/api/auth";

export default function SignOutLink() {
  const { resetUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setLoading(true);

    try {
      const res = await authService.logout();

      if (res.success) {
        resetUser(); // clear user from context
        toast.success("Logged out successfully");
        router.push("/"); // redirect to home
      } else {
        console.error("Logout failed:", res.error);
        toast.error(res.error || "Failed to logout");
      }
    } catch (error) {
      console.error("Unexpected logout error:", error);
      toast.error("Failed to logout");
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
