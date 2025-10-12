import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("block w-[100px] h-[50px] relative", className)}
    >
      <Image
        src="/images/logo.jpeg"
        alt="CuteHomes Logo"
        fill
        sizes="100px"
        className="object-contain"
        priority
      />
    </Link>
  );
}
