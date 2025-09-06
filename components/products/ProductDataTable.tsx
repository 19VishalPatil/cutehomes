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
import Image from "next/image";
import { IconButton } from "@/components/form/Buttons";
import DeleteProductForm from "@/components/products/DeleteProductForm";
import { Item } from "@/lib/api/types/itemTypes/item";

export default function ProductDataTable({ items }: { items: Item[] }) {
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
              slug,
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
                    href={`/products/${slug}`}
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
                  <DeleteProductForm itemId={productId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}
