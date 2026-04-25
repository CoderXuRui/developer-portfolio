"use client";

import { Mail, MapPin, Link2, X, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const contactConfig = [
  { key: "email", icon: Mail, color: "bg-red-500/10 text-red-500", hasLink: true },
  { key: "github", icon: Link2, color: "bg-gray-500/10 text-gray-700", hasLink: true },
  { key: "wechat", icon: MessageCircle, color: "bg-green-500/10 text-green-500", hasLink: false },
  { key: "location", icon: MapPin, color: "bg-green-500/10 text-green-500", hasLink: false },
];

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const [showWechatQR, setShowWechatQR] = useState(false);

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
                    : "https://github.com/CoderXuRui"
                  : null;

                if (method.key === "wechat") {
                  return (
                    <button
                      key={index}
                      onClick={() => setShowWechatQR(true)}
                      className="w-full flex items-center gap-4 p-4 rounded-xl transition-all hover:shadow-md bg-background-alt cursor-pointer border border-transparent hover:border-green-500/30"
                    >
                      <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center`}>
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <span className="text-sm text-foreground-muted">{t(method.key)}</span>
                        <p className="font-medium">{t(`${method.key}Value`)}</p>
                      </div>
                    </button>
                  );
                }

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
                      {method.icon && <method.icon className="w-5 h-5" />}
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
            <a
              href="https://github.com/CoderXuRui"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Link2 className="w-5 h-5" />
            </a>
            <button
              onClick={() => setShowWechatQR(true)}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-colors"
              aria-label="WeChat"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <a
              href="mailto:13985108687@163.com"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

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
              <h3 className="text-lg font-display font-semibold">{t("wechat")}</h3>
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
              {t("wechatValue")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
