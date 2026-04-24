"use client";

import { Download, FileText, Eye, Printer } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

function useLocalizedHref(path: string) {
  const locale = useLocale();
  const prefix = locale === "zh" ? "" : "/en";
  if (path === "/") return prefix || "/";
  return `${prefix}${path}`;
}

export default function ResumePage() {
  const t = useTranslations("ResumePage");
  const contactHref = useLocalizedHref("/contact");

  const handlePrint = () => {
    window.print();
  };

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

      {/* Resume Actions */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border animate-fade-in-up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Preview */}
              <a
                href="/山东大学-张栩睿.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
              >
                <Eye className="w-5 h-5" />
                <span className="font-medium">{t("preview")}</span>
              </a>

              {/* Download */}
              <a
                href="/山东大学-张栩睿.pdf"
                download="张栩睿-简历.pdf"
                className="flex items-center gap-3 px-6 py-4 bg-card text-foreground rounded-xl border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors"
              >
                <Download className="w-5 h-5" />
                <span>{t("download")}</span>
              </a>

              {/* Print */}
              <button
                onClick={handlePrint}
                className="flex items-center gap-3 px-6 py-4 bg-background-alt text-foreground rounded-xl border border-border hover:border-primary transition-colors"
              >
                <Printer className="w-5 h-5" />
                <span className="font-medium">{t("print")}</span>
              </button>
            </div>

            <div className="mt-8 p-6 bg-background-alt rounded-xl">
              <div className="flex items-start gap-4">
                <FileText className="w-12 h-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">{t("fileName")}</h3>
                  <p className="text-foreground-muted text-sm">
                    {t("fileDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {[
              { label: t("name"), value: t("nameValue") },
              { label: t("position"), value: t("positionValue") },
              { label: t("stack"), value: t("stackValue") },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm border border-border text-center"
              >
                <span className="text-foreground-muted text-sm">{item.label}</span>
                <p className="font-display font-semibold text-lg mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-display font-semibold mb-4 animate-fade-in-up">
            {t("ctaTitle")}
          </h3>
          <p className="text-foreground-muted mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {t("ctaDesc")}
          </p>
          <a
            href={contactHref}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("contactMe")}
          </a>
        </div>
      </section>
    </>
  );
}
