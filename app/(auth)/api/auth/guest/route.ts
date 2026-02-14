import { NextResponse } from "next/server";
// FIXME:
// const { searchParams } = new URL(request.url); 
import { getToken } from "next-auth/jwt";
import { signIn } from "@/app/(auth)/auth"; // superfluous for now.
import { isDevelopmentEnvironment } from "@/lib/constants";

const bIsOnlineAssessment : boolean = false // Make this an env variable later for publishing.

export async function GET(request: Request) {
    if (!bIsOnlineAssessment)
    {
        // const redirectUrl = searchParams.get("redirectUrl") || "/";
        const token = await getToken({
        req: request,
        secret: process.env.AUTH_SECRET,
        secureCookie: !isDevelopmentEnvironment,
        });
        if (token) {
        return NextResponse.redirect(new URL("/", request.url));
        }
    }
    return NextResponse.redirect(new URL("/", request.url));
}
