import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

// middleware protecting the admin route's main admin page (not login)

export function middleware( req: NextRequest) {
    // ignore all non admin routes
    if (!req.nextUrl.pathname.startsWith("/admin")) return;

    // ignore login admin route
    if (req.nextUrl.pathname === "/admin/login") return;

    // if on the actual admin page

    // check for token
    const token = req.cookies.get("admin_token")?.value;
    // no token --> redirect to login page
    if (!token) {
        console.log("Did not find token, going back to login")
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try{
        // try to verify token if it exists
        jwt.verify(token, process.env.JWT_SECRET!);
        // correct token, let it go
        return NextResponse.next();
    } catch {
        // incorrect token, redirect to login
        console.log("Found token but it did not match, going back to login")
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }
}

export const config = {
  matcher: ["/admin/:path*"], // matches /admin and all subpaths
};