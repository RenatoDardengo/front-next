import { NextRequest, NextResponse } from "next/server";

export default function AuthenticationMiddleware(req:NextRequest){
    const token = req.cookies.get('auth_token')?.value;
    const signInUrl = new URL('/admin', req.url);

    if (!token && req.nextUrl.pathname !== "/admin") {
        return NextResponse.redirect(signInUrl);
    }
}

export const config = {
    matcher: ['/admin', '/admin/home:path*']
};