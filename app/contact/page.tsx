"use client";

import { Mail, MapPin, Contact, Link2 } from "lucide-react";
import { useTranslations } from "next-intl";

const contactConfig = [
  { key: "email", icon: Mail, color: "bg-red-500/10 text-red-500", hasLink: true },
  { key: "github", icon: Link2, color: "bg-gray-500/10 text-gray-700", hasLink: true },
  { key: "wechat", icon: Contact, color: "bg-green-500/10 text-green-500", hasLink: false },
  { key: "location", icon: MapPin, color: "bg-green-500/10 text-green-500", hasLink: false },
];

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background-alt to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              {t("title")}<span className="text-gradient"> {t("titleHighlight")}</span>
            </h1>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-display font-bold mb-6 animate-fade-in-up">{t("contactMethods")}</h2>
            <div className="space-y-4">
              {contactConfig.map((method, index) => {
                const href = method.hasLink
                  ? method.key === "email"
                    ? `mailto:${t("emailValue")}`
                    : "https://github.com"
                  : null;
                return (
                  <a
                    key={index}
                    href={href || undefined}
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all hover:shadow-md ${
                      href ? "bg-card border border-border hover:border-primary cursor-pointer" : "bg-background-alt cursor-default"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center`}>
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm text-foreground-muted">{t(method.key)}</span>
                      <p className="font-medium">{t(`${method.key}Value`)}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-display font-semibold mb-6 animate-fade-in-up">{t("followMe")}</h3>
          <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {[
              { icon: Link2, href: "https://github.com", label: "GitHub" },
              { icon: Contact, href: null, label: "WeChat" },
              { icon: Mail, href: "mailto:13985108687@163.com", label: "Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href || "#"}
                target={social.href?.startsWith("http") ? "_blank" : undefined}
                rel={social.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors ${!social.href ? "cursor-default" : ""}`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
