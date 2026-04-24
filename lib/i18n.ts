import { getLocale } from "next-intl/server";

/**
 * Build a localized href by prefixing with /en when locale is English.
 * For the default locale (zh), no prefix is added.
 */
export async function localizedHref(path: string): Promise<string> {
  const locale = await getLocale();
  const prefix = locale === "zh" ? "" : "/en";
  if (path === "/") return prefix || "/";
  return `${prefix}${path}`;
}
