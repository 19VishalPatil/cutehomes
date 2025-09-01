"use server";

import { cookies } from "next/headers";
import { RegisterFormSchema } from "./schemas/authSchema";
import { FormState } from "./types";
import { registerCustomer } from "@/lib/api/auth";
import { redirect } from "next/navigation";

export const registerCustomerAction = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  const validation = RegisterFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validation.success) {
    const errors: Record<string, string[]> = {};

    // Loop through issues
    validation.error.issues.forEach((issue) => {
      const field = issue.path[0] as string;
      if (!errors[field]) errors[field] = [];
      errors[field].push(issue.message);
    });

    return {
      error: errors,
    };
  }

  const response = await registerCustomer(validation.data, {
    Authorization: `Bearer ${accessToken}`,
  });

  if (!response.success) {
    return {
      message: response.error ?? "Registration failed. Please try again.",
    };
  }

  redirect("/auth/login?message=registered");
};

// export const loginAction = async (
//   state: FormState,
//   formData: FormData
// ): Promise<FormState> => {
//   const validation = LoginFormSchema.safeParse({
//     email: formData.get("email"),
//     password: formData.get("password"),
//   });

//   if (!validation.success) {
//     const errors: Record<string, string[]> = {};

//     // Loop through issues
//     validation.error.issues.forEach((issue) => {
//       const field = issue.path[0] as string;
//       if (!errors[field]) errors[field] = [];
//       errors[field].push(issue.message);
//     });

//     return {
//       error: errors,
//     };
//   }

//   const response = await loginUser(validation.data);

//   if (!response.success) {
//     return {
//       message: response.error ?? "Login failed. Please try again.",
//     };
//   }

//   const result = response.data;

//   console.log(result);
// };
