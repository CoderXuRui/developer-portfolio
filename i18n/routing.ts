import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // 支持的语言
  locales: ["zh", "en"],

  // 默认语言
  defaultLocale: "zh",

  // 语言前缀策略：as-needed = 只有非默认语言才加前缀
  localePrefix: "as-needed",
});
