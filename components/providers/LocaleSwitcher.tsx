"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === "zh" ? "en" : "zh";

    // Get current path without locale prefix
    const pathnameWithoutLocale = pathname.replace(/^\/(en|zh)/, "") || "/";

    // Build new path: no prefix for default (zh), /en prefix for English
    const newPath = newLocale === "zh"
      ? pathnameWithoutLocale
      : `/en${pathnameWithoutLocale}`;

    // Set cookie BEFORE navigation so the new page picks up the correct locale
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;SameSite=Lax`;

    // Use full page reload to ensure locale context is fully refreshed.
    // router.push() does client-side navigation which reuses cached locale
    // context and causes the new language to not take effect immediately.
    window.location.href = newPath;
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-background-alt transition-colors text-sm font-medium"
      aria-label="Switch language"
      title={locale === "zh" ? "切换到 English" : "Switch to 中文"}
    >
      <Globe className="w-4 h-4 text-foreground-muted" />
      <span className="text-foreground-muted">
        {locale === "zh" ? "EN" : "中"}
      </span>
    </button>
  );
}
