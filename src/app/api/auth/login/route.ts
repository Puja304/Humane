import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
    // extract from the request
    const { username, password } = await req.json();

    if (
        username !== process.env.ADMIN_USER ||
        password !== process.env.ADMIN_PASS
    ) {
        return new Response("Invalid Credentials", {status: 401});
    } 

    // We are defining it as a constanta and adding ! as a guarantee to typescript that this exists. It must exist to be able to use it in jwt.sign()
    const secret = process.env.JWT_SECRET!;

    // creae token
    const token = jwt.sign(
        { role: "admin" },
        secret,
        { expiresIn : "1h"} 
    );

    // set coookie
    const cookieStore = await cookies();

    cookieStore.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/"
    });

    return Response.json({success: true});
}