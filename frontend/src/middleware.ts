import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  const role = request.cookies.get("role")?.value;

  const path = request.nextUrl.pathname;

  const protectedRoutes = [
    "/admin",
    "/teacher",
    "/student",
    "/parent",
  ];

  const isProtected = protectedRoutes.some((route) =>
    path.startsWith(route)
  );

  // Login nahi hai
  if (isProtected && !token) {
    return NextResponse.redirect(
      new URL("/sign-in", request.url)
    );
  }

  // Role based access
  if (path.startsWith("/admin") && role !== "ADMIN") {
    return NextResponse.redirect(
      new URL("/sign-in", request.url)
    );
  }

  if (path.startsWith("/teacher") && role !== "TEACHER") {
    return NextResponse.redirect(
      new URL("/sign-in", request.url)
    );
  }

  if (path.startsWith("/student") && role !== "STUDENT") {
    return NextResponse.redirect(
      new URL("/sign-in", request.url)
    );
  }

  if (path.startsWith("/parent") && role !== "PARENT") {
    return NextResponse.redirect(
      new URL("/sign-in", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/teacher/:path*",
    "/student/:path*",
    "/parent/:path*",
  ],
};