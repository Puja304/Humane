import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    // extract from the request
    const { username, password } = await req.json();

    if (
        username !== process.env.ADMIN_USER ||
        password !== process.env.ADMIN_PASS
    ) {
        return new Response("Invalid Credentials", {status: 401});
    } 

    // creae token
    // We are adding an ! as a guarantee to typescript that this exists. It must exist to be able to use it in jwt.sign()
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET!, { expiresIn: "1h" });

    const res = NextResponse.redirect(new URL("/admin", req.url));

    res.cookies.set({
    name: "admin_token",
    value: token,
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60,
    });

    return res;
}