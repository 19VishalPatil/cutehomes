import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  description: z.string().optional(),
  buyingPrice: z.coerce.number().min(1, "Buying price is required"),
  sellingPrice: z.coerce.number().min(1, "Selling price is required"),
  hsnOrSacCode: z.string().optional(),
  barcode: z.string().optional(),
  categoryIds: z.array(z.coerce.number()).optional(),
  files: z
    .array(z.instanceof(File))
    .min(1, "At least one media file is required"),
});

export const updateProductSchema = productSchema.extend({
  files: z.array(z.instanceof(File)).optional(),
});
