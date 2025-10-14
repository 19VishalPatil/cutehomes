"use client";

import { updateProductAction } from "@/utils/productActions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { SubmitButton } from "@/components/form/Buttons";
import { CategoryMultiSelectInput } from "@/components/form/CategoryMultiSelectInput";
import MediaInput from "@/components/form/MediaInput";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Item } from "@/lib/api/types/itemTypes/item";
import { Category } from "@/lib/api/types/itemTypes/category";

interface UpdateProductFormProps {
  product: Item;
  categories: Category[];
}

export default function UpdateProductForm({
  product,
  categories,
}: UpdateProductFormProps) {
  const {
    id,
    name,
    description,
    buyingPrice,
    sellingPrice,
    categories: assignedCategories,
    media,
    barcode,
    hsnOrSacCode,
  } = product;

  console.log(buyingPrice);

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">update product</h1>

      <div className="my-20">
        <h2>Item media</h2>
        <div className="flex gap-4">
          {media.map((m) => {
            const { id, path, mime, name } = m;
            const isVideo = mime.startsWith("video/");
            return (
              <div className="relative h-32 w-32" key={id}>
                {isVideo ? (
                  <video
                    src={path}
                    controls
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <Image
                    src={path}
                    alt={name}
                    fill
                    priority
                    className="rounded-md object-cover"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="border p-8 rounded-md">
        {/* Image Input Container */}
        <FormContainer action={updateProductAction}>
          {(state) => (
            <>
              <input type="hidden" name="id" value={id} />
              <div className="grid gap-4 md:grid-cols-2 my-4">
                {/* Media upload */}
                <MediaInput required={false} />

                {/* Name */}
                <FormInput
                  type="text"
                  name="name"
                  label="product name"
                  defaultValue={name}
                  error={
                    state?.error && typeof state.error !== "string"
                      ? state.error.name
                      : undefined
                  }
                />

                {/* Categories */}
                <div className="grid gap-3">
                  <Label className="capitalize">Categories</Label>
                  <CategoryMultiSelectInput
                    categories={categories}
                    defaultSelected={assignedCategories}
                  />
                </div>

                {/* Prices */}
                <PriceInput
                  name="buyingPrice"
                  defaultValue={buyingPrice}
                  error={
                    state?.error && typeof state.error !== "string"
                      ? state.error.buyingPrice
                      : undefined
                  }
                />
                <PriceInput
                  name="sellingPrice"
                  defaultValue={sellingPrice}
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
                  defaultValue={hsnOrSacCode}
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
                  defaultValue={barcode}
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
                defaultValue={description}
                error={
                  state?.error && typeof state.error !== "string"
                    ? state.error.description
                    : undefined
                }
              />

              {/* <div className="mt-6">
            <CheckboxInput name="featured" label="featured" />
          </div> */}
              <SubmitButton text="update product" className="mt-8" />
            </>
          )}
        </FormContainer>
      </div>
    </section>
  );
}
