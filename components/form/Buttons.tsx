"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IoReload, IoReloadCircleOutline } from "react-icons/io5";
import { LucidePenSquare } from "lucide-react";
import { LuTrash2 } from "react-icons/lu";

type btnSize = "default" | "lg" | "sm";
type variant =
  | "default"
  | "outline"
  | "link"
  | "destructive"
  | "secondary"
  | "ghost"
  | null
  | undefined;

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
  variant?: variant;
};

export function SubmitButton({
  className = "",
  text = "submit",
  size = "lg",
  variant = "outline",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn("capitalize", className)}
      size={size}
      variant={variant}
    >
      {pending ? (
        <>
          <IoReload className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

type actionType = "edit" | "delete";
export const IconButton = ({ actionType }: { actionType: actionType }) => {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case "edit":
        return <LucidePenSquare />;
      case "delete":
        return <LuTrash2 />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  };

  return (
    <Button
      type="submit"
      size="icon"
      variant="link"
      className="p-2 cursor-pointer"
    >
      {pending ? (
        <IoReloadCircleOutline className=" animate-spin" />
      ) : (
        renderIcon()
      )}
    </Button>
  );
};
