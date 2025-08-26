import { getCategories } from "@/lib/api/category";
import { createProductAction } from "@/utils/productActions";
import { SubmitButton } from "@/components/form/Buttons";
import { CategoryMultiSelectInput } from "@/components/form/CategoryMultiSelectInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import MediaInput from "@/components/form/MediaInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";

export const revalidate = 0;

export default async function CreateProductPage() {
  const categories = (await getCategories()).data;

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <MediaInput />
            <FormInput type="text" name="name" label="product name" required />

            <CategoryMultiSelectInput categories={categories} />

            <PriceInput name="buyingPrice" />
            <PriceInput name="sellingPrice" />
            <FormInput type="text" name="hsnOrSacCode" label="HSN/SAC" />
            <FormInput type="text" name="barcode" label="barcode" />
          </div>
          <TextAreaInput name="description" labelText="product description" />
          {/* <div className="mt-6">
            <CheckboxInput name="featured" label="featured" />
          </div> */}

          <SubmitButton text="Create Product" className="mt-8 cursor-pointer" />
        </FormContainer>
      </div>
    </section>
  );
}
