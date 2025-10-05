"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { RegisterFormSchema } from "./schemas/authSchema";
import { FormState } from "./types";
import { authService } from "@/lib/api/auth";

export const registerCustomerAction = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  // 1. Validate with Zod
  const validation = RegisterFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validation.success) {
    const fieldErrors: Record<string, string[]> = {};
    validation.error.issues.forEach((issue) => {
      const field = issue.path[0] as string;
      if (!fieldErrors[field]) fieldErrors[field] = [];
      fieldErrors[field].push(issue.message);
    });

    // return field-level errors
    return { error: fieldErrors };
  }
  
  // 2. Get token if available
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  // 3. Call API
  const response = await authService.registerCustomer(validation.data, {
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  });

  if (!response.success) {
    //  If API sends field-level errors
    if (response.errors && typeof response.errors === "object") {
      const fieldErrors: Record<string, string[]> = {};
      Object.entries(response.errors).forEach(([field, message]) => {
        fieldErrors[field] = Array.isArray(message) ? message : [message];
      });
      return { error: fieldErrors };
    }

    //  Global error (fallback)
    return { error: response.error ?? "Registration failed." };
  }

  // 4. Redirect on success
  redirect("/auth/login?message=registered");
};
