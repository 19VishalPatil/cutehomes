import EmptyList from "@/components/global/EmptyList";
import Link from "next/link";
import { formatCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getItems } from "@/lib/api/items";
import Image from "next/image";
import { IconButton } from "@/components/form/Buttons";
import { deleteProductAction } from "@/utils/productActions";
import FormContainer from "@/components/form/FormContainer";

export const revalidate = 0;

async function ItemsPage() {
  const items = (await getItems()).data;
  if (items.length === 0) return <EmptyList />;

  return (
    <section>
      <Table>
        <TableCaption className="capitalize text-left">
          total products : {items.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Categories</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => {
            const {
              id: productId,
              name,
              sellingPrice,
              categories,
              media,
            } = item;

            // Only first image (ignore videos)
            const image = media.find((m) => m.mime.startsWith("image/"))?.path;

            const categoryList = Array.isArray(categories)
              ? categories.map((c) => c.name).join(", ")
              : "";

            return (
              <TableRow key={productId}>
                <TableCell className="flex items-center gap-2">
                  {image && (
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  )}
                  <Link
                    href={`/products/${productId}`}
                    className="underline text-muted-foreground tracking-wide capitalize"
                  >
                    {name}
                  </Link>
                </TableCell>

                <TableCell className="whitespace-normal">
                  {categoryList}
                </TableCell>

                <TableCell>{formatCurrency(sellingPrice)}</TableCell>

                <TableCell className="flex items-center gap-2">
                  <Link href={`/admin/products/${productId}/edit`}>
                    <IconButton actionType="edit" />
                  </Link>
                  <DeleteItem itemId={productId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}

function DeleteItem({ itemId }: { itemId: number }) {
  const deleteItem = deleteProductAction.bind(null, itemId);
  return (
    <FormContainer action={deleteItem}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}

export default ItemsPage;
