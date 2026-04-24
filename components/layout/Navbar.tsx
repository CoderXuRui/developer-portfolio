"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, Code2 } from "lucide-react";
import ThemeToggle from "@/components/providers/ThemeToggle";
import LocaleSwitcher from "@/components/providers/LocaleSwitcher";

function useLocalizedHref(path: string) {
  const locale = useLocale();
  const prefix = locale === "zh" ? "" : "/en";
  if (path === "/") return prefix || "/";
  return `${prefix}${path}`;
}

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/experience", label: t("experience") },
    { href: "/projects", label: t("projects") },
    { href: "/blog", label: t("blog") },
    { href: "/resume", label: t("resume") },
    { href: "/contact", label: t("contact") },
  ];

  // Remove locale prefix from pathname for active state comparison
  const activePath = pathname.replace(/^\/(en|zh)/, "/") || "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <LocalizedLink href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg text-foreground hidden sm:block">
              小满
            </span>
          </LocalizedLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activePath === item.href;
              return (
                <LocalizedLink
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : "text-foreground-muted hover:text-foreground hover:bg-background-alt"
                  }`}
                >
                  {item.label}
                </LocalizedLink>
              );
            })}
          </div>

          {/* Theme Toggle + Locale */}
          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-background-alt transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activePath === item.href;
                return (
                  <LocalizedLink
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-foreground-muted hover:text-foreground hover:bg-background-alt"
                    }`}
                  >
                    {item.label}
                  </LocalizedLink>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

// Helper component that prefixes href with /en when in English mode
function LocalizedLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const locale = useLocale();
  const prefix = locale === "zh" ? "" : "/en";
  const localizedHref = href === "/" ? prefix || "/" : `${prefix}${href}`;

  return (
    <Link href={localizedHref} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
