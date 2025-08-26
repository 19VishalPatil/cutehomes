/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import api from "@/lib/api/axios";
import { productSchema, updateProductSchema } from "./schemas/productSchema";
import { deleteItem } from "@/lib/api/items";
import { revalidatePath } from "next/cache";

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string; data?: any }> => {
  try {
    // Convert FormData to an object
    const dataObj: Record<string, any> = {
      name: formData.get("name"),
      description: formData.get("description"),
      buyingPrice: formData.get("buyingPrice"),
      sellingPrice: formData.get("sellingPrice"),
      hsnOrSacCode: formData.get("hsnOrSacCode"),
      barcode: formData.get("barcode"),
      categoryIds: formData.getAll("categories[]"),
      files: formData.getAll("files") as File[],
    };

    // Validate the data using Zod
    const result = productSchema.safeParse(dataObj);

    if (!result.success) {
      const errors = result.error.issues.map((i) => i.message).join(", ");
      throw new Error(errors);
    }

    const validatedData = result.data;

    // Build FormData to send to API
    const apiFormData = new FormData();
    apiFormData.append("name", validatedData.name);
    if (validatedData.description)
      apiFormData.append("description", validatedData.description);
    apiFormData.append("buyingPrice", String(validatedData.buyingPrice));
    apiFormData.append("sellingPrice", String(validatedData.sellingPrice));
    if (validatedData.hsnOrSacCode)
      apiFormData.append("hsnOrSacCode", validatedData.hsnOrSacCode);
    if (validatedData.barcode)
      apiFormData.append("barcode", validatedData.barcode);

    // Append categories
    validatedData.categoryIds?.forEach((catId) =>
      apiFormData.append("categoryIds[]", String(catId))
    );

    // Append files
    validatedData.files.forEach((file) => apiFormData.append("files", file));

    // Send to API
    await api.post("/items", apiFormData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    revalidatePath("/admin/products");
    revalidatePath("/products");
    return { message: "Product created successfully" };
  } catch (err: any) {
    console.error("Error creating product:", err?.response || err.message);
    return { message: err?.message || "Failed to create product" };
  }
};

export const updateProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string; data?: any }> => {
  try {
    const productId = formData.get("id") as string;

    // Convert FormData to object for validation
    const dataObj: Record<string, any> = {
      name: formData.get("name"),
      description: formData.get("description"),
      buyingPrice: formData.get("buyingPrice"),
      sellingPrice: formData.get("sellingPrice"),
      hsnOrSacCode: formData.get("hsnOrSacCode"),
      barcode: formData.get("barcode"),
      categoryIds: formData.getAll("categories[]"),
      files: formData.getAll("files") as File[],
    };

    // Validate with Zod
    const result = updateProductSchema.safeParse(dataObj);
    if (!result.success) {
      const errors = result.error.issues.map((i) => i.message).join(", ");
      throw new Error(errors);
    }
    const validatedData = result.data;

    // Build FormData for API
    const apiFormData = new FormData();
    apiFormData.append("name", validatedData.name);
    if (validatedData.description)
      apiFormData.append("description", validatedData.description);
    apiFormData.append("buyingPrice", String(validatedData.buyingPrice));
    apiFormData.append("sellingPrice", String(validatedData.sellingPrice));
    if (validatedData.hsnOrSacCode)
      apiFormData.append("hsnOrSacCode", validatedData.hsnOrSacCode);
    if (validatedData.barcode)
      apiFormData.append("barcode", validatedData.barcode);

    validatedData.categoryIds?.forEach((catId) =>
      apiFormData.append("categoryIds[]", String(catId))
    );

    validatedData.files?.forEach((file) => {
      if (file.size > 0) {
        apiFormData.append("files", file);
      }
    });

    await api.patch(`/items/${productId}`, apiFormData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    revalidatePath(`admin/products/${productId}/edit`);
    revalidatePath("/products");

    return { message: "Product updated successfully" };
  } catch (err: any) {
    console.error("Error updating product:", err?.response || err.message);
    return { message: err?.message || "Failed to update product" };
  }
};

export const deleteProductAction = async (id: number) => {
  try {
    await deleteItem(id);
    revalidatePath("/admin/products");
    revalidatePath("/products");
    return { message: "Product deleted successfully!" };
  } catch (err: any) {
    console.error(err);
    return { message: "Failed to delete product" };
  }
};
