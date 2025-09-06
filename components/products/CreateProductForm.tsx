"use client";

import { createProductAction } from "@/utils/productActions";
import { SubmitButton } from "@/components/form/Buttons";
import { CategoryMultiSelectInput } from "@/components/form/CategoryMultiSelectInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import MediaInput from "@/components/form/MediaInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Label } from "@/components/ui/label";
import { Category } from "@/lib/api/types/itemTypes/category";

export default function CreateProductForm({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          {(state) => (
            <>
              <div className="grid gap-4 md:grid-cols-2 my-4">
                {/* Media upload */}
                <MediaInput />

                {/* Name */}
                <FormInput
                  type="text"
                  name="name"
                  label="product name"
                  required
                  error={
                    state?.error && typeof state.error !== "string"
                      ? state.error.name
                      : undefined
                  }
                />

                {/* Categories */}
                <div className="grid gap-3">
                  <Label className="capitalize">Categories</Label>
                  <CategoryMultiSelectInput categories={categories} />
                </div>

                {/* Prices */}
                <PriceInput
                  name="buyingPrice"
                  error={
                    state?.error && typeof state.error !== "string"
                      ? state.error.buyingPrice
                      : undefined
                  }
                />
                <PriceInput
                  name="sellingPrice"
                  error={
                    state?.error && typeof state.error !== "string"
                      ? state.error.sellingPrice
                      : undefined
                  }
                />

                {/* Codes */}
                <FormInput
                  type="text"
                  name="hsnOrSacCode"
                  label="HSN/SAC"
                  error={
                    state?.error && typeof state.error !== "string"
                      ? state.error.hsnOrSacCode
                      : undefined
                  }
                />
                <FormInput
                  type="text"
                  name="barcode"
                  label="barcode"
                  error={
                    state?.error && typeof state.error !== "string"
                      ? state.error.barcode
                      : undefined
                  }
                />
              </div>

              {/* Description */}
              <TextAreaInput
                name="description"
                labelText="product description"
                error={
                  state?.error && typeof state.error !== "string"
                    ? state.error.description
                    : undefined
                }
              />
              <SubmitButton
                text="Create Product"
                className="mt-8 cursor-pointer"
              />
            </>
          )}
        </FormContainer>
      </div>
    </section>
  );
}
