/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import api from "@/lib/api/axios";

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string; data?: any }> => {
  try {
    const files = formData.getAll("files") as File[];
    const name = formData.get("name") as string;
    const buyingPrice = formData.get("buyingPrice") as string;
    const sellingPrice = formData.get("sellingPrice") as string;
    const hsnOrSacCode = formData.get("hsnOrSacCode") as string;
    const barcode = formData.get("barcode") as string;
    const description = formData.get("description") as string;
    const categories: string[] = formData.getAll("categories[]") as string[];

    // ---- build fresh FormData for API ----
    const apiFormData = new FormData();
    apiFormData.append("name", name);
    apiFormData.append("buyingPrice", buyingPrice);
    apiFormData.append("sellingPrice", sellingPrice);
    apiFormData.append("hsnOrSacCode", hsnOrSacCode);
    apiFormData.append("barcode", barcode);
    apiFormData.append("description", description);

    // append categories[]
    categories.forEach((catId) =>
      apiFormData.append("categoryIds[]", String(catId))
    );

    // append multiple files
    files.forEach((file) => apiFormData.append("files", file));

    // ---- send to NestJS API ----
    await api.post("/items", apiFormData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return {
      message: "Product created successfully",
    };
  } catch (err: any) {
    console.error("Error creating product:", err.response);
    return { message: "Failed to create product" };
  }
};
