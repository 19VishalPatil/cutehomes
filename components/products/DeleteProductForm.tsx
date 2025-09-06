"use client";

import { deleteProductAction } from "@/utils/productActions";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuTrash2 } from "react-icons/lu";

export default function DeleteProductForm({ itemId }: { itemId: number }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            type="button"
            size="icon"
            variant="link"
            className="p-2 cursor-pointer"
          >
            <LuTrash2 />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Product ?</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this product? This action cannot
              be undone. (All the images will also be deleted*)
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer">
                Cancel
              </Button>
            </DialogClose>
            <FormContainer action={deleteProductAction}>
              {(state) => (
                <>
                  <input type="hidden" name="id" value={itemId} />
                  <SubmitButton
                    text="Confirm delete "
                    size="default"
                    className="cursor-pointer"
                  />
                </>
              )}
            </FormContainer>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
