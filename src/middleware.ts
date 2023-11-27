
import { NextRequest, NextResponse } from "next/server";
import UserService from "@/services/apis/userService";

export default async function AuthenticationMiddleware(req:NextRequest){
    const signInUrl = new URL('/admin', req.url);
    const token = req.cookies.get('auth_token')?.value;
    if(token){
        try {
            const response = await UserService.verifyToken(token);
            console.log(" status",response.status)
            if(response.status===200){
                

            } else if (response.status !== 200 && req.nextUrl.pathname !== "/admin"){
                return NextResponse.redirect(signInUrl);

            }


        } catch (error) {
            console.log(error)
        }


    }
    

    if (!token && req.nextUrl.pathname !== "/admin") {
        return NextResponse.redirect(signInUrl);
    }
}

export const config = {
    matcher: ['/admin', '/admin/home:path*']
};