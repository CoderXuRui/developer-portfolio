"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Mail, Heart, Link2, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

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
  const [showWechatQR, setShowWechatQR] = useState(false);

  return (
    <>
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
                  href="https://github.com/CoderXuRui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <Link2 className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setShowWechatQR(true)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-colors"
                  aria-label="WeChat"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
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

      {/* WeChat QR Modal */}
      {showWechatQR && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowWechatQR(false)}
        >
          <div
            className="bg-card rounded-2xl p-6 shadow-2xl max-w-sm w-full animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-display font-semibold">WeChat</h3>
              <button
                onClick={() => setShowWechatQR(false)}
                className="w-8 h-8 rounded-full bg-background-alt flex items-center justify-center hover:bg-border transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-xl overflow-hidden bg-white">
                <Image
                  src="/wechat.jpg"
                  alt="WeChat QR Code"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-center text-foreground-muted text-sm mt-4">
              ZXR3737
            </p>
          </div>
        </div>
      )}
    </>
  );
}