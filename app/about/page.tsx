import { GraduationCap, Award, Calendar } from "lucide-react";
import { getTranslations } from "next-intl/server";

const skillsData = [
  { categoryKey: "programming", skills: ["Java", "Python", "C++", "SQL"] },
  { categoryKey: "backend", skills: ["Spring Boot", "Spring Cloud", "MyBatis", "Spring AI"] },
  { categoryKey: "database", skills: ["MySQL", "PostgreSQL", "Redis"] },
  { categoryKey: "middleware", skills: ["Kafka", "RabbitMQ", "Nginx"] },
  { categoryKey: "devops", skills: ["Docker"] },
  { categoryKey: "tools", skills: ["Git", "Linux", "VS Code", "IntelliJ IDEA", "Claude Code"] },
];

const achievements = [
  "achievement1",
  "achievement2",
  "achievement3",
];

const timeline = [
  { year: "2022", eventKey: "2022" },
  { year: "2023", eventKey: "2023" },
  { year: "2024", eventKey: "2024" },
  { year: "2025", eventKey: "2025" },
  { year: "2026", eventKey: "2026" },
];

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");

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

      {/* Education Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-display font-bold">{t("education")}</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow animate-fade-in-up">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground">{t("school")}</h3>
                  <p className="text-primary font-medium">{t("degree")}</p>
                </div>
                <div className="flex items-center gap-2 text-foreground-muted">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{t("period")}</span>
                </div>
              </div>
              <p className="text-foreground-muted">{t("eduDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-2xl font-display font-bold">{t("professionalSkills")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((group, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <h3 className="font-display font-semibold text-lg mb-4 text-primary">{t(group.categoryKey)}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-background-alt text-sm font-medium text-foreground-muted hover:text-foreground hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-yellow-500" />
            </div>
            <h2 className="text-2xl font-display font-bold">{t("achievements")}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((key, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-sm border border-border animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="font-medium">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold mb-8 animate-fade-in-up">{t("timeline")}</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-12 animate-fade-in-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    {item.year.slice(-2)}
                  </div>
                  <div className="bg-card rounded-xl p-4 shadow-sm border border-border">
                    <span className="text-sm text-foreground-muted">{item.year}</span>
                    <p className="font-medium mt-1">{t(`timelineEvents.${item.eventKey}`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
