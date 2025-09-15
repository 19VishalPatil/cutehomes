"use client";
import { Button } from "@/components/ui/button";
import Container from "@/components/global/Container";
import Link from "next/link";

export default function Error({ error }) {
  return (
    <main className="h-dvh flex justify-center items-center">
      <Container>
        <div className="flex justify-center items-center flex-col gap-6">
          <h1 className="text-3xl font-semibold">something went wrong!</h1>
          <p className="text-lg">{error.message}</p>
          <Button variant="outline" className="p-2 cursor-pointer" asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
