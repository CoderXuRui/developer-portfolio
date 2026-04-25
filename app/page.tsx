import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { localizedHref } from "@/lib/i18n";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export default async function Home() {
  const t = await getTranslations("HomePage");
  const prefix = (await localizedHref("/")).slice(0, -1); // "/en" or ""

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
                <Sparkles className="w-4 h-4" />
                {t("welcomeBadge")}
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                {t("greeting")}
                <span className="text-gradient block mt-2">{t("name")}</span>
              </h1>

              <p className="text-xl sm:text-2xl text-foreground-muted leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                {t("role")}
                <span className="text-primary font-semibold">{t("techStack")}</span>
              </p>

              <p className="text-base text-foreground-muted leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                {t("bio")}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                {["Java", "Spring Boot", "Spring AI", "MySQL", "Redis", "Docker"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-background-alt text-sm font-medium text-foreground-muted border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <Link
                  href={await localizedHref("/about")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                >
                  {t("learnMore")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={await localizedHref("/resume")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground rounded-lg font-medium border border-border hover:border-primary transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {t("viewResume")}
                </Link>
              </div>
            </div>

            {/* Right Content - Avatar/Visual */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-accent/30 animate-spin-slow-reverse" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/30 flex items-center justify-center">
                  <Image src="/xiaoman.jpg" alt="张栩睿" width={300} height={300} className="rounded-full object-cover" />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-card rounded-lg shadow-lg animate-float">
                  <span className="text-sm font-medium text-foreground">{t("role")}</span>
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-card rounded-lg shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
                  <span className="text-sm font-medium text-foreground">Java</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-foreground-muted rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 animate-fade-in-up">
                {t("aboutTitle")}
                <span className="text-primary"> {t("aboutMe")}</span>
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                {t("aboutDesc")}
              </p>
              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{t("education")}</h4>
                    <p className="text-sm text-foreground-muted">{t("educationDetail")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{t("skills")}</h4>
                    <p className="text-sm text-foreground-muted">{t("skillsDetail")}</p>
                  </div>
                </div>
              </div>
              <Link
                href={await localizedHref("/about")}
                className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:gap-3 transition-all animate-fade-in-up" style={{ animationDelay: "0.3s" }}
              >
                {t("viewDetail")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 md:order-2 flex justify-center animate-fade-in-up">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3" />
                <div className="absolute inset-0 bg-white rounded-2xl transform -rotate-3 flex items-center justify-center p-8">
                  <Image src="/山东大学-logo.png" alt="山东大学" width={200} height={200} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Preview Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 animate-fade-in-up">
              {t("experienceTitle")}
              <span className="text-gradient"> {t("experienceTitleHighlight")}</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {t("experienceDesc")}
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[{
              company: t("experienceCompany1"),
              role: t("experienceRole1"),
              period: t("experiencePeriod1"),
              desc: t("experienceDesc1"),
            }].map((item, index) => (
              <div key={index} className="flex gap-6 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  {index < 1 && <div className="w-0.5 h-full bg-border" />}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-semibold text-lg">{item.company}</h3>
                      <span className="text-sm text-foreground-muted">{item.period}</span>
                    </div>
                    <p className="text-primary font-medium mb-2">{item.role}</p>
                    <p className="text-foreground-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Link
              href={await localizedHref("/experience")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              {t("viewAllExp")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 animate-fade-in-up">
              {t("projectsTitle")}
              <span className="text-gradient"> {t("projectsTitleHighlight")}</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {t("projectsDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{
              name: t("project1Name"),
              tech: t("project1Tech"),
              desc: t("project1Desc"),
            }, {
              name: t("project2Name"),
              tech: t("project2Tech"),
              desc: t("project2Desc"),
            }].map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 shadow-sm border border-border hover:border-primary hover:shadow-lg transition-all animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                  </div>
                  <span className="text-xs font-mono text-foreground-muted bg-background-alt px-2 py-1 rounded">{project.tech}</span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                <p className="text-foreground-muted text-sm mb-4">{project.desc}</p>
                <Link href={`${prefix}/projects`} className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t("viewDetailLink")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Link
              href={await localizedHref("/projects")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground rounded-lg font-medium border border-border hover:border-primary transition-colors"
            >
              {t("viewAllProjects")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 animate-fade-in-up">
            {t("ctaTitle")}
          </h2>
          <p className="text-white/80 text-lg mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {t("ctaDesc")}
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link
              href={await localizedHref("/contact")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-card text-primary rounded-lg font-medium hover:bg-background-alt transition-colors"
            >
              {t("contactMe")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={await localizedHref("/blog")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-card/10 text-white rounded-lg font-medium hover:bg-card/20 transition-colors border border-white/20"
            >
              {t("readBlog")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
