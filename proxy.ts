import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname starts with a locale prefix (e.g. /en/about)
  const localeMatch = pathname.match(/^\/(en|zh)(?:\/|$)/);

  if (localeMatch) {
    const locale = localeMatch[1];
    // Rewrite to remove locale prefix for internal routing
    const newPathname = pathname.replace(`/${locale}`, "") || "/";

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-next-intl-locale", locale);

    const response = NextResponse.rewrite(new URL(newPathname, request.url), {
      request: { headers: requestHeaders },
    });
    response.cookies.set("NEXT_LOCALE", locale, { path: "/", sameSite: "lax" });
    return response;
  }

  // No locale prefix - default locale (zh)
  // Also pass locale via header so request.ts reads it correctly
  // (cookie from response may not be visible in cookies() during same request)
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-next-intl-locale", routing.defaultLocale);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.cookies.set("NEXT_LOCALE", routing.defaultLocale, { path: "/", sameSite: "lax" });
  return response;
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
