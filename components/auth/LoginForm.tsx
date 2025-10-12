"use client";

import { cn } from "@/lib/utils";
import Logo from "@/components/navbar/Logo";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { authService } from "@/lib/api/auth";

interface LoginFormProps {
  className?: string;
  callbackUrl?: string;
}

export default function LoginForm({ className, callbackUrl }: LoginFormProps) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{
    email?: string[];
    password?: string[];
  }>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const res = await authService.login(formData);

      if (res.success) {
        toast.success("Login successful");
        // Redirect after login
        window.location.href = callbackUrl || "/";
      } else {
        if (res.errors) {
          setErrors(res.errors as typeof errors);
        }
        toast.error(res.error || "Login failed");
      }
    } catch (err) {
      console.error("Unexpected login error:", err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Card>
        <CardHeader>
          <div className="flex justify-center">
            <Logo />
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="m@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-sm text-red-400">
                  {errors.email.join(", ")}
                </p>
              )}

              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && (
                <p className="text-sm text-red-400">
                  {errors.password.join(", ")}
                </p>
              )}

              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full bg-shop_btn_dark_green hover:bg-shop_light_green"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
                {/* <Button variant="outline" className="w-full">
                  Login with Google
                </Button> */}
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="underline underline-offset-4"
              >
                Register
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
