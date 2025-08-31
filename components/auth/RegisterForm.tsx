"use client";

import { cn } from "@/lib/utils";
import Logo from "@/components/navbar/Logo";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import FormInput from "../form/FormInput";
import { registerCustomerAction } from "@/utils/authActions";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export default function RegisterForm({ className }: { className?: string }) {
  const [state, action] = useActionState(registerCustomerAction, undefined);

  useEffect(() => {
    if (state?.message) {
      toast(state.message);
    }
  }, [state]);

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Card>
        <CardHeader>
          <div className=" flex justify-center">
            <Logo />
          </div>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={action}>
            <div className="flex flex-col gap-3">
              <FormInput name="firstName" type="text" placeholder="Your Name" />
              {state?.error?.firstName && (
                <p className="text-sm text-red-400">
                  {state.error.firstName.join(", ")}
                </p>
              )}
              <FormInput
                name="lastName"
                type="text"
                placeholder="Your last name"
              />
              {state?.error?.lastName && (
                <p className="text-sm text-red-400">
                  {state.error.lastName.join(", ")}
                </p>
              )}

              <FormInput
                name="email"
                type="email"
                placeholder="m@example.com"
              />
              {state?.error?.email && (
                <p className="text-sm text-red-400">
                  {state.error.email.join(", ")}
                </p>
              )}

              <FormInput type="password" name="password" />
              {state?.error?.password && (
                <p className="text-sm text-red-400">
                  {state.error.password.join(", ")}
                </p>
              )}

              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full cursor-pointer text-white"
                >
                  Sign up
                </Button>
                {/* <Button variant="outline" className="w-full cursor-pointer">
                  Sign up with Google
                </Button> */}
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
