import { FolderGit, ExternalLink, Link2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const projects = [
  {
    nameKey: "project1_name",
    descKey: "project1_desc",
    tech: ["Java", "Spring Boot", "Redis", "Kafka", "Docker"],
    highlights: ["project1_highlight1", "project1_highlight2", "project1_highlight3"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    nameKey: "project2_name",
    descKey: "project2_desc",
    tech: ["Spring Cloud", "MySQL", "Redis", "Nginx", "Docker"],
    highlights: ["project2_highlight1", "project2_highlight2", "project2_highlight3"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    nameKey: "project3_name",
    descKey: "project3_desc",
    tech: ["Python", "Flask", "MySQL", "ECharts", "Kafka"],
    highlights: ["project3_highlight1", "project3_highlight2", "project3_highlight3"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    nameKey: "project4_name",
    descKey: "project4_desc",
    tech: ["React 19", "TypeScript"],
    highlights: ["project4_highlight1", "project4_highlight2", "project4_highlight3"],
    link: "http://117.72.121.43:1026/",
    github: "https://github.com/CoderXuRui/moyan-md",
    featured: false,
  },
];

export default async function ProjectsPage() {
  const t = await getTranslations("ProjectsPage");
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background-alt to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              {t("title")}
              <span className="text-gradient"> {t("titleHighlight")}</span>
            </h1>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold mb-8 animate-fade-in-up">
            <span className="text-primary">{t("featuredTitle")}</span> {t("featuredSuffix")}
          </h2>
          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:border-primary transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Visual */}
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center min-h-64">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <FolderGit className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-display font-semibold group-hover:text-primary transition-colors">
                        {t(project.nameKey)}
                      </h3>
                      <div className="flex gap-2">
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-background-alt transition-colors"
                            aria-label="GitHub"
                          >
                            <Link2 className="w-5 h-5 text-foreground-muted" />
                          </a>
                        )}
                        {project.link !== "#" && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-background-alt transition-colors"
                            aria-label="External Link"
                          >
                            <ExternalLink className="w-5 h-5 text-foreground-muted" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-foreground-muted mb-6 leading-relaxed">
                      {t(project.descKey)}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                        >
                          {t(highlight)}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
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

      {/* Other Projects */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold mb-8 animate-fade-in-up">{t("otherTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary transition-all animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                    <FolderGit className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-background-alt transition-colors"
                        aria-label="GitHub"
                      >
                        <Link2 className="w-4 h-4 text-foreground-muted" />
                      </a>
                    )}
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-background-alt transition-colors"
                        aria-label="External Link"
                      >
                        <ExternalLink className="w-4 h-4 text-foreground-muted" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {t(project.nameKey)}
                </h3>
                <p className="text-foreground-muted text-sm mb-4">{t(project.descKey)}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded bg-background-alt text-foreground-muted text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-display font-semibold mb-4 animate-fade-in-up">
            {t("ctaTitle")}
          </h3>
          <a
            href="https://github.com/CoderXuRui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Link2 className="w-5 h-5" />
            {t("viewGithub")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
