"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Mail, Heart, Link2 } from "lucide-react";

function LocalizedLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const locale = useLocale();
  const prefix = locale === "zh" ? "" : "/en";
  const localizedHref = href === "/" ? prefix || "/" : `${prefix}${href}`;

  return (
    <Link href={localizedHref} className={className}>
      {children}
    </Link>
  );
}

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-background-alt text-foreground border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">{t("name")}</h3>
            <p className="text-foreground-muted text-sm leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-foreground-muted">
              {t("quickLinks")}
            </h4>
            <div className="flex flex-col gap-2">
              <LocalizedLink href="/about" className="text-foreground-muted hover:text-primary transition-colors text-sm">
                {t("aboutMe")}
              </LocalizedLink>
              <LocalizedLink href="/projects" className="text-foreground-muted hover:text-primary transition-colors text-sm">
                {t("projectExp")}
              </LocalizedLink>
              <LocalizedLink href="/blog" className="text-foreground-muted hover:text-primary transition-colors text-sm">
                {t("techBlog")}
              </LocalizedLink>
              <LocalizedLink href="/contact" className="text-foreground-muted hover:text-primary transition-colors text-sm">
                {t("contactInfo")}
              </LocalizedLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-foreground-muted">
              {t("contactInfo")}
            </h4>
            <div className="flex gap-4">
              <a
                href="mailto:13985108687@163.com"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Link2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 pb-12 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground-muted text-xs">
            &copy; {new Date().getFullYear()} {t("copyright")}
          </p>
          <p className="text-foreground-muted text-xs flex items-center gap-1">
            {t("madeWith")} <Heart className="w-3 h-3 text-red-500" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
}
