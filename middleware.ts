import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

const adminRoutes = ["/admin", "/admin/settings", "/admin/users"];
const customerRoutes = ["/checkout", "/account", "/account/orders", "/orders"];

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;
  const url = req.nextUrl.pathname;

  const loginUrl = new URL("/auth/login", req.url);
  loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);

  if (!token) {
    loginUrl.searchParams.set("message", "login_required");
    return NextResponse.redirect(loginUrl);
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    // Admin route protection
    if (
      adminRoutes.some((route) => url.startsWith(route)) &&
      payload.role !== "admin"
    ) {
      loginUrl.searchParams.set("message", "admin_required");
      return NextResponse.redirect(loginUrl);
    }

    // Customer route protection
    if (
      customerRoutes.some((route) => url.startsWith(route)) &&
      payload.role !== "customer"
    ) {
      loginUrl.searchParams.set("message", "customer_required");
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  } catch {
    loginUrl.searchParams.set("message", "login_required");
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: [
    // "/admin/:path*",
    "/account/:path*",
    "/checkout/:path*",
    "/orders/:path*",
  ],
};
