import { FileText, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { localizedHref } from "@/lib/i18n";

const posts = [
  {
    slug: "spring-boot-best-practices",
    title: "Spring Boot 最佳实践指南",
    excerpt: "分享 Spring Boot 开发中的常见问题和最佳实践，包括配置优化、性能调优等方面的经验总结。",
    date: "2024-03-15",
    readTime: "8 分钟",
    tags: ["Java", "Spring Boot", "后端"],
  },
  {
    slug: "distributed-system-intro",
    title: "分布式系统入门指南",
    excerpt: "介绍分布式系统的基础概念，包括一致性、可用性、分区容错性等核心问题的探讨。",
    date: "2024-02-28",
    readTime: "12 分钟",
    tags: ["分布式", "架构", "理论"],
  },
  {
    slug: "redis-performance-optimization",
    title: "Redis 性能优化实战",
    excerpt: "从实际项目出发，讲解 Redis 在高并发场景下的性能优化策略和最佳实践。",
    date: "2024-01-20",
    readTime: "10 分钟",
    tags: ["Redis", "性能优化", "缓存"],
  },
  {
    slug: "microservices-architecture",
    title: "微服务架构设计与实践",
    excerpt: "探讨微服务架构的设计原则、常见问题以及实践经验，帮助你构建可靠的微服务系统。",
    date: "2023-12-15",
    readTime: "15 分钟",
    tags: ["微服务", "Spring Cloud", "架构"],
  },
  {
    slug: "kafka-deep-dive",
    title: "Kafka 深入理解与应用",
    excerpt: "深入剖析 Kafka 的核心概念和原理，以及如何在大数据场景下合理应用。",
    date: "2023-11-08",
    readTime: "11 分钟",
    tags: ["Kafka", "消息队列", "大数据"],
  },
  {
    slug: "mysql-index-optimization",
    title: "MySQL 索引优化详解",
    excerpt: "全面讲解 MySQL 索引的原理、最佳实践以及常见的性能问题解决方案。",
    date: "2023-10-22",
    readTime: "9 分钟",
    tags: ["MySQL", "数据库", "性能"],
  },
];

export default async function BlogPage() {
  const t = await getTranslations("BlogPage");
  const prefix = (await localizedHref("/")).slice(0, -1); // "/en" or ""

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

      {/* Blog List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`${prefix}/blog/${post.slug}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:border-primary transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-primary/50" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-foreground-muted mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-foreground-muted text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded bg-background-alt text-foreground-muted text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    {t("readFull")}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-display font-semibold mb-4 animate-fade-in-up">
            {t("subscribeTitle")}
          </h3>
          <p className="text-foreground-muted mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {t("subscribeDesc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:border-primary transition-colors"
            />
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors">
              {t("subscribe")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
