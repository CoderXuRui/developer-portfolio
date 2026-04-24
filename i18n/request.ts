import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { routing } from "./routing";

export default getRequestConfig(async () => {
  // Priority: header (set by proxy.ts) > cookie > default
  // Header is more reliable because cookie set in proxy response
  // may not be visible in cookies() during the same request
  const headerStore = await headers();
  const cookieStore = await cookies();

  let locale = headerStore.get("x-next-intl-locale") || cookieStore.get("NEXT_LOCALE")?.value;

  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
