import { FolderGit, ExternalLink, Link2, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "分布式任务调度系统",
    description: "基于 Redis + Kafka 构建的高性能任务调度平台，支持分布式部署、任务分片、失败重试等功能。",
    tech: ["Java", "Spring Boot", "Redis", "Kafka", "Docker"],
    highlights: ["支持 10万+ 并发任务", "可视化任务管理", "多节点集群部署"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    name: "微服务电商系统",
    description: "完整的电商后端解决方案，包含用户、商品、订单、支付等核心模块，采用 Spring Cloud 微服务架构。",
    tech: ["Spring Cloud", "MySQL", "Redis", "Nginx", "Docker"],
    highlights: ["服务间通信", "分布式事务", "API 文档完善"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    name: "数据采集分析平台",
    description: "用于采集多源数据并进行清洗、分析的可视化平台，支持实时数据处理和自定义报表生成。",
    tech: ["Python", "Flask", "MySQL", "ECharts", "Kafka"],
    highlights: ["多源数据接入", "实时数据处理", "可视化报表"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    name: "墨砚",
    description: "一个优雅的本地 Markdown 笔记应用，提供沉浸式双栏编辑体验。",
    tech: ["React 19", "TypeScript"],
    highlights: ["导入/导出功能", "三主题切换、专注模式", "Markdown 编辑"],
    link: "http://117.72.121.43:1026/",
    github: "https://github.com/CoderXuRui/moyan-md",
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background-alt to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              项目<span className="text-gradient"> 作品</span>
            </h1>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              精选项目，凝聚技术实践与创新
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold mb-8 animate-fade-in-up">
            <span className="text-primary">Featured</span> Projects
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
                        {project.name}
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
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                        >
                          {highlight}
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
          <h2 className="text-2xl font-display font-bold mb-8 animate-fade-in-up">Other Projects</h2>
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
                  {project.name}
                </h3>
                <p className="text-foreground-muted text-sm mb-4">{project.description}</p>

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
            想查看更多项目代码？
          </h3>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Link2 className="w-5 h-5" />
            访问 GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}