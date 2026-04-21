import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export default function Home() {
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
                欢迎来到我的技术空间
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                你好，我是
                <span className="text-gradient block mt-2">小满</span>
              </h1>

              <p className="text-xl sm:text-2xl text-foreground-muted leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                后端开发工程师
                <span className="text-primary font-semibold"> · Java 技术栈</span>
              </p>

              <p className="text-base text-foreground-muted leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                热爱技术，专注于构建高效、可靠的后端系统。
                喜欢探索新技术，追求代码艺术。
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                {["Java", "Spring Boot", "Spring AI", "MySQL", "Redis",  "Docker"].map((tag) => (
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
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                >
                  了解更多
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-foreground rounded-lg font-medium border border-border hover:border-primary transition-colors"
                >
                  <Download className="w-4 h-4" />
                  查看简历
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
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-white rounded-lg shadow-lg animate-float">
                  <span className="text-sm font-medium text-foreground">后端开发</span>
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-white rounded-lg shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
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
                关于
                <span className="text-primary"> 我</span>
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                我是一名来自山东大学的后端开发工程师，专注于 Java 技术栈开发。
                拥有扎实的计算机基础知识，热衷于解决复杂的工程问题。
              </p>
              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-medium">教育背景</h4>
                    <p className="text-sm text-foreground-muted">山东大学 · 计算机科学与技术</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-medium">专业技能</h4>
                    <p className="text-sm text-foreground-muted">Java / Spring Boot / 中间件 / 分布式系统</p>
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:gap-3 transition-all animate-fade-in-up" style={{ animationDelay: "0.3s" }}
              >
                查看详细经历
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 md:order-2 flex justify-center animate-fade-in-up">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl transform -rotate-3 flex items-center justify-center">
                  <span className="text-8xl text-white font-display font-bold opacity-20">山</span>
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
              工作
              <span className="text-gradient"> 经历</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              从实际项目中积累经验，不断成长
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              { company: "阿里国际电商支付部门", role: "后端开发工程师", period: "2025.04 - 2025.09", desc: "负责支付链路架构升级与稳定性治理和azada支付链路AIOps与智能诊断Agent平台开发" },
              // { company: "实习单位", role: "后端开发实习生", period: "2022 - 2023", desc: "参与企业级项目开发，学习微服务架构与团队协作" },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  {index < 1 && <div className="w-0.5 h-full bg-border" />}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
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
              href="/experience"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              查看全部经历
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
              项目
              <span className="text-gradient"> 作品</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              精选项目，展示技术能力与实践成果
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "分布式任务调度系统", tech: "Java / Redis / Kafka", desc: "支持高并发、分布式的任务调度平台" },
              { name: "微服务电商系统", tech: "Spring Cloud / MySQL / Docker", desc: "完整的电商后端解决方案" },
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-sm border border-border hover:border-primary hover:shadow-lg transition-all animate-fade-in-up"
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
                <Link href="/projects" className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  查看详情
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-foreground rounded-lg font-medium border border-border hover:border-primary transition-colors"
            >
              查看全部项目
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 animate-fade-in-up">
            准备好了开始合作？
          </h2>
          <p className="text-white/80 text-lg mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            无论是项目合作还是技术交流，我都非常期待与您联系
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-background-alt transition-colors"
            >
              联系我
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20"
            >
              阅读博客
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}