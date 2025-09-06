"use client";

import { cn } from "@/lib/utils";
import Logo from "@/components/navbar/Logo";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import FormInput from "../form/FormInput";
import FormContainer from "../form/FormContainer";
import { registerCustomerAction } from "@/utils/authActions";

export default function RegisterForm({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Card>
        <CardHeader>
          <div className="flex justify-center">
            <Logo />
          </div>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <FormContainer
            action={registerCustomerAction}
            className="flex flex-col gap-3"
          >
            {(state) => (
              <>
                <FormInput
                  name="firstName"
                  type="text"
                  placeholder="Your Name"
                  error={
                    state?.error && typeof state.error !== "string"
                      ? state.error.firstName
                      : undefined
                  }
                  required
                />

                <FormInput
                  name="lastName"
                  type="text"
                  placeholder="Your Name"
                  error={
                    state?.error && typeof state.error !== "string"
                      ? state.error.lastName
                      : undefined
                  }
                  required
                />

                <FormInput
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  error={
                    state?.error && typeof state.error !== "string"
                      ? state.error.email
                      : undefined
                  }
                  required
                />

                <FormInput
                  name="password"
                  type="password"
                  placeholder="Password"
                  error={
                    state?.error && typeof state.error !== "string"
                      ? state.error.password
                      : undefined
                  }
                  required
                />

                <div className="flex flex-col gap-3 mt-2">
                  <Button
                    type="submit"
                    className="w-full cursor-pointer text-white"
                  >
                    Sign up
                  </Button>
                </div>

                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link
                    href="/auth/login"
                    className="underline underline-offset-4"
                  >
                    Login
                  </Link>
                </div>
              </>
            )}
          </FormContainer>
        </CardContent>
      </Card>
    </div>
  );
}
