export const runtime = "edge"; // 👈 Required for Cloudflare Pages

import { updateProductAction } from "@/utils/productActions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { SubmitButton } from "@/components/form/Buttons";
import { getItem } from "@/lib/api/items";
import { CategoryMultiSelectInput } from "@/components/form/CategoryMultiSelectInput";
import MediaInput from "@/components/form/MediaInput";
import { getCategories } from "@/lib/api/category";
import Image from "next/image";

async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getItem(id);
  const {
    name,
    description,
    buyingPrice,
    sellingPrice,
    categories: assignedCategories,
    media,
    barcode,
    hsnOrSacCode,
  } = product.data;

  const categories = (await getCategories()).data;

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
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <MediaInput required={false} />
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={name}
            />

            <CategoryMultiSelectInput
              categories={categories}
              defaultSelected={assignedCategories}
            />

            <PriceInput name="buyingPrice" defaultValue={buyingPrice} />
            <PriceInput name="sellingPrice" defaultValue={sellingPrice} />
            <FormInput
              type="text"
              name="hsnOrSacCode"
              label="HSN/SAC"
              defaultValue={hsnOrSacCode}
            />
            <FormInput
              type="text"
              name="barcode"
              label="barcode"
              defaultValue={barcode}
            />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={description}
          />
          {/* <div className="mt-6">
            <CheckboxInput name="featured" label="featured" />
          </div> */}
          <SubmitButton text="update product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default EditProductPage;
