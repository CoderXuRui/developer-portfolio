import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { localizedHref } from "@/lib/i18n";

const posts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}> = {
  "spring-boot-best-practices": {
    title: "Spring Boot 最佳实践指南",
    date: "2024-03-15",
    readTime: "8 分钟",
    tags: ["Java", "Spring Boot", "后端"],
    content: `
## 概述

Spring Boot 是 Java 后端开发中最流行的框架之一。本文将分享一些在实际项目中的最佳实践，帮助你构建更好的应用。

## 1. 配置管理

### 使用 application.yml 代替 application.properties

\`\`\`yaml
spring:
  application:
    name: my-app
  datasource:
    url: jdbc:mysql://localhost:3306/db
    username: root
    password: password
\`\`\`

### 多环境配置

创建 application-dev.yml、application-prod.yml 等不同环境的配置文件。

## 2. 依赖注入

### 构造函数注入（推荐）

\`\`\`java
@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
\`\`\`

## 3. 异常处理

使用全局异常处理器统一处理业务异常：

\`\`\`java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BusinessException.class)
    public Result<?> handleBusinessException(BusinessException e) {
        return Result.error(e.getMessage());
    }
}
\`\`\`

## 4. 性能优化

- 使用异步方法处理非核心逻辑
- 合理使用缓存
- 数据库连接池配置优化

## 总结

遵循这些最佳实践，可以让你的 Spring Boot 项目更加健壮和易维护。
    `,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts[slug];
  const t = await getTranslations("BlogPostPage");

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-background-alt to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={await localizedHref("/blog")}
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors mb-8 animate-fade-in"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backToList")}
          </Link>

          <div className="animate-fade-in-up">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                >
                  <Tag className="w-3 h-3 inline mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-foreground-muted">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none animate-fade-in-up">
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <div dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
                  .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/`([^`]+)`/g, '<code class="px-2 py-1 bg-background-alt rounded text-sm font-mono">$1</code>')
                  .replace(/```(\w+)?\n([\s\S]+?)\n```/g, '<pre class="bg-background-alt rounded-lg p-4 overflow-x-auto mb-4"><code>$2</code></pre>')
              }} />
            </div>
          </article>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href={await localizedHref("/blog")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-lg font-medium border border-border hover:border-primary transition-colors"
            >
              {t("backToListBtn")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
