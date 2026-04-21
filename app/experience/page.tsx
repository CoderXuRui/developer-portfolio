import { Briefcase, Calendar, ArrowRight } from "lucide-react";
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
  // {
  //   company: "山东大学实验室",
  //   role: "后端开发实习生",
  //   period: "2022.06 - 2023.05",
  //   location: "济南",
  //   responsibilities: [
  //     "参与科研项目后端开发",
  //     "负责数据处理与分析模块实现",
  //     "学习并应用微服务架构理念",
  //     "参与技术文档编写与代码 review",
  //   ],
  //   techStack: ["Java", "Spring MVC", "MySQL", "Python"],
  // },
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
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative mb-12 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.15}s` }}
              >
                {/* Timeline indicator */}
                <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-4" />
                  )}
                </div>

                {/* Content card */}
                <div className="ml-16 sm:ml-20 sm:mr-0 sm:max-w-[calc(50%-2rem)]">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-display font-semibold text-foreground">{exp.company}</h3>
                        <p className="text-primary font-medium">{exp.role}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-foreground-muted">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="px-2 py-1 bg-background-alt rounded">{exp.location}</span>
                      </div>
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
                          className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-mono"
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