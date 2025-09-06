import { cookies } from "next/headers";

export async function getSession() {
  // Get access token
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("access_token")?.value;

  return accessToken;
}
