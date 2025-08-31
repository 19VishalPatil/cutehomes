import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type SpinnerProps = {
  className?: string;
};

export function Spinner({ className }: SpinnerProps) {
  return (
    <Loader2
      className={cn("animate-spin text-primary w-[40px] h-[40px]", className)}
    />
  );
}
