import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ViewAll({ className }: { className?: string }) {
  return (
    <div className={cn("text-center mt-4", className)}>
      <Button variant="outline" size="lg" asChild>
        <Link href="/products">
          View All <IoIosArrowRoundForward />
        </Link>
      </Button>
    </div>
  );
}
