import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    company: "阿里国际电商支付部门",
    role: "后端开发工程师",
    period: "2025.04 - 2025.09",
    location: "广州",
    responsibilities: [
      "构建文档向量化存储与检索全链路，调优文档分块与TopK参数，提升知识检索准确率至85%",
      "基于ReAct模式实现对话Agent，支持多场景无缝切换，覆盖多角色需求并优化对话体验",
      "基于Plan-Execute-Replan模式实现AIOps智能运维诊断Agent，构建故障诊断完整闭环",
      "设计支付成功率分析Agent的L4意图路由+L5数据分析双层架构，解决大模型报表幻觉问题",
      "融合ODPS离线数仓与相关算法，实现支付核心指标多维度波动精准归因",
      "设计支付链路灰度发布方案，通过用户ID动态分流与流量开关实现新页面平滑上线",
      "开展Klarna渠道最低消费门槛A/B实验，动态调整支付金额限制支撑业务决策",
      "进行全链路调试与日志对比分析，定位问题根因并设计数据回补方案保障数据完整性",
    ],
    techStack: ["Java", "Spring Boot", "MySQL", "Redis", "Spring AI"],
  },
];

export default function ExperiencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background-alt to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              工作<span className="text-gradient"> 经历</span>
            </h1>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              从校园到职场，一路成长与蜕变
            </p>
          </div>
        </div>
      </section>

      {/* Experience List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-4">
                  {/* Visual */}
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex flex-col items-center justify-center min-h-64">
                    <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center mb-4 p-2">
                      <Image src="/alibaba.png" alt="阿里巴巴" width={80} height={80} className="object-contain" />
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-2 text-sm text-foreground-muted justify-center">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <span className="inline-block mt-2 px-3 py-1 bg-background-alt rounded text-sm">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-display font-semibold text-foreground mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground-muted text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>

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
            想了解更多项目经验？
          </h3>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            查看项目作品
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
