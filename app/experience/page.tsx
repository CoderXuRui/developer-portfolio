import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { localizedHref } from "@/lib/i18n";

const experiences = [
  {
    logo: "/alibaba.png",
    companyKey: "company1",
    roleKey: "role1",
    periodKey: "period1",
    locationKey: "location1",
    summaryKey: "summary1",
    projects: [
      {
        titleKey: "project1_1_title",
        details: [
          { labelKey: "project1_1_detail1_label", descKey: "project1_1_detail1_desc" },
          { labelKey: "project1_1_detail2_label", descKey: "project1_1_detail2_desc" },
          { labelKey: "project1_1_detail3_label", descKey: "project1_1_detail3_desc" },
        ],
      },
      {
        titleKey: "project1_2_title",
        details: [
          { labelKey: "project1_2_detail1_label", descKey: "project1_2_detail1_desc" },
          { labelKey: "project1_2_detail2_label", descKey: "project1_2_detail2_desc" },
          { labelKey: "project1_2_detail3_label", descKey: "project1_2_detail3_desc" },
          { labelKey: "project1_2_detail4_label", descKey: "project1_2_detail4_desc" },
          { labelKey: "project1_2_detail5_label", descKey: "project1_2_detail5_desc" },
        ],
      },
    ],
    techStack: ["Spring AI", "ReAct", "Plan-Execute-Replan", "MCP", "RAG", "SLS", "ODPS"],
  },
  {
    logo: "/dongfangsiwei.jpg",
    companyKey: "company2",
    roleKey: "role2",
    periodKey: "period2",
    locationKey: "location2",
    summaryKey: "summary2",
    projects: [
      {
        titleKey: "project2_1_title",
        details: [
          { labelKey: "project2_1_detail1_label", descKey: "project2_1_detail1_desc" },
        ],
      },
      {
        titleKey: "project2_2_title",
        details: [
          { labelKey: "project2_2_detail1_label", descKey: "project2_2_detail1_desc" },
        ],
      },
      {
        titleKey: "project2_3_title",
        details: [
          { labelKey: "project2_3_detail1_label", descKey: "project2_3_detail1_desc" },
        ],
      },
      {
        titleKey: "project2_4_title",
        details: [
          { labelKey: "project2_4_detail1_label", descKey: "project2_4_detail1_desc" },
        ],
      },
    ],
    techStack: ["Java", "Spring Boot", "JWT", "MinIO", "MySQL", "WebSocket"],
  },
];

export default async function ExperiencePage() {
  const t = await getTranslations("ExperiencePage");

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

      {/* Experience Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {experiences.map((exp, expIndex) => (
              <div
                key={expIndex}
                className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all animate-fade-in-up"
                style={{ animationDelay: `${0.1 + expIndex * 0.1}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Left: Logo & Meta */}
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex flex-col items-center justify-center min-h-64 lg:col-span-1">
                    <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center mb-4 p-2 shadow-sm">
                      <Image src={exp.logo} alt={t(exp.companyKey)} width={80} height={80} className="object-contain" />
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-2 text-sm text-foreground-muted justify-center mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{t(exp.periodKey)}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-background-alt rounded text-sm">
                        <MapPin className="w-3 h-3" />
                        {t(exp.locationKey)}
                      </span>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="lg:col-span-4 p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-display font-semibold text-foreground mb-1">
                        {t(exp.companyKey)}
                      </h3>
                      <p className="text-primary font-medium">{t(exp.roleKey)}</p>
                    </div>

                    <p className="text-foreground-muted mb-6">{t(exp.summaryKey)}</p>

                    {/* Projects */}
                    <div className="space-y-5 mb-6">
                      {exp.projects.map((project, projIndex) => (
                        <div key={projIndex}>
                          <h4 className="text-base font-semibold text-foreground mb-2">{t(project.titleKey)}</h4>
                          <div className="space-y-2">
                            {project.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-foreground-muted text-sm">
                                  <span className="font-semibold text-foreground">{t(detail.labelKey)}</span>
                                  {t(detail.descKey)}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg bg-background-alt text-foreground-muted text-xs font-mono hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
          <Link
            href={await localizedHref("/projects")}
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {t("viewProjects")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
