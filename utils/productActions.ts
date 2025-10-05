"use server";

import { revalidatePath } from "next/cache";
import { FormState } from "@/utils/types";
import { itemService } from "@/lib/api/items";
import { productSchema, updateProductSchema } from "./schemas/productSchema";
import { getSession } from "@/lib/session";
import { wishlistService } from "@/lib/api/wishlist";
import { redirect } from "next/navigation";

// ---------------------- Create Product ----------------------
export const createProductAction = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const dataObj = {
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
    const fieldErrors: Record<string, string[]> = {};
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as string;
      if (!fieldErrors[field]) fieldErrors[field] = [];
      fieldErrors[field].push(issue.message);
    });
    return { error: fieldErrors };
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

  // get access token
  const accessToken = await getSession();

  const response = await itemService.create(apiFormData, {
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  });

  if (response.status === 401) {
    return redirect("/auth/login?message=login_required");
  }

  if (!response.success) {
    if (response.errors && typeof response.errors === "object") {
      const fieldErrors: Record<string, string[]> = {};
      Object.entries(response.errors).forEach(([field, message]) => {
        fieldErrors[field] = Array.isArray(message) ? message : [message];
      });
      return { error: fieldErrors };
    }
    return { error: response.error ?? "Failed to create product." };
  }

  revalidatePath("/admin/products");
  revalidatePath("/products");

  return { message: "Product created successfully" };
};

// ---------------------- Update Product ----------------------
export const updateProductAction = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const productId = formData.get("id") as string;
  if (!productId) return { error: { id: ["Product ID is required"] } };

  // Build object for validation
  const dataObj = {
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
    const fieldErrors: Record<string, string[]> = {};
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as string;
      if (!fieldErrors[field]) fieldErrors[field] = [];
      fieldErrors[field].push(issue.message);
    });
    return { error: fieldErrors };
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

  // get access token
  const accessToken = await getSession();

  // Call the API via service (consistent)
  const response = await itemService.update(productId, apiFormData, {
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  });

  if (response.status === 401) {
    return redirect("/auth/login?message=login_required");
  }

  if (!response.success) {
    if (response.errors && typeof response.errors === "object") {
      const fieldErrors: Record<string, string[]> = {};
      Object.entries(response.errors).forEach(([field, message]) => {
        fieldErrors[field] = Array.isArray(message) ? message : [message];
      });
      return { error: fieldErrors };
    }
    return { error: response.error ?? "Failed to update product." };
  }

  // Revalidate pages
  revalidatePath(`/admin/products/${productId}/edit`);
  revalidatePath("/products");

  return { message: "Product updated successfully" };
};

// ---------------------- Delete Product ----------------------
export const deleteProductAction = async (
  _prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const productId = formData.get("id");
  if (!productId) return { error: { id: ["Product ID is required"] } };

  // get access token
  const accessToken = await getSession();

  const response = await itemService.delete(Number(productId), {
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  });

  if (response.status === 401) {
    return redirect("/auth/login?message=login_required");
  }

  if (!response.success) {
    return { error: "Failed to delete product." };
  }
  // Revalidate paths
  revalidatePath("/admin/products");
  revalidatePath("/products");

  return { message: "Product deleted successfully" };
};

// ---------------------- Add to wishlist ----------------------
export const toggleWishlistAction = async (
  _prevState: FormState,
  formData: FormData
) => {
  const id = formData.get("id");
  const isWishlistedStr = formData.get("isWishlisted");

  if (!id || isWishlistedStr === null) {
    return { error: "Required data missing" };
  }

  const isWishlisted = isWishlistedStr === "true";

  // get access token
  const accessToken = await getSession();

  let response;
  if (!isWishlisted) {
    response = await wishlistService.add(id.toString(), {
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    });
  } else {
    response = await wishlistService.remove(id.toString(), {
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    });
  }
  if (response.status === 401) {
    return redirect("/auth/login?message=login_required");
  }

  if (!response.success) {
    return { error: response.error || "Failed to toggle wishlist" };
  }

  // Revalidate paths
  revalidatePath("/products");

  return {
    message: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
  };
};
