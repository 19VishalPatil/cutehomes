import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block w-[100px] h-[50px] relative">
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
