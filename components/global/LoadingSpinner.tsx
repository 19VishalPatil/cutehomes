import { Loader2 } from "lucide-react";

type SpinnerProps = {
  message?: string;
};

export function Spinner({ message = "loading...." }: SpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center py-10 min-h-80 gap-4 w-full mt-10">
      <div className="space-x-2 flex items-center text-shop_light_green">
        <Loader2 className="w-5 h-6 animate-spin" />
        <span>{message}</span>
      </div>
    </div>
  );
}
