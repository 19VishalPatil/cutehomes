import LoginWrapper from "@/components/auth/LoginWrapper";
import { Spinner } from "@/components/global/LoadingSpinner";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function LoginPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  if (token) redirect("/");

  return (
    <Suspense fallback={<Spinner />}>
      {/* <LoginContent /> */}
      <LoginWrapper />
    </Suspense>
  );
}
