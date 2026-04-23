import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    logo: "/alibaba.png",
    company: "阿里巴巴 - 阿里国际",
    role: "电商基础链路支付部门 · 后端开发实习生",
    period: "2025.04 - 2025.09",
    location: "广州",
    summary: "在实习期间，深度参与了支付链路的核心架构升级与稳定性治理工作，并主导开发了智能诊断 Agent 平台。",
    projects: [
      {
        title: "支付链路架构升级与稳定性治理",
        details: [
          {
            label: "支付链路灰度发布方案：",
            desc: "通过用户ID的动态分流和可配置的流量开关，在支付域与交易域协同实现了按比例、平滑的新页面上线，以支持前端技术改造与用户体验优化。"
          },
          {
            label: "A/B 实验支撑：",
            desc: "参与 Klarna 渠道最低消费门槛的 A/B 实验，通过动态调整支付金额限制，支撑业务方进行科学决策，将渠道启用门槛从35欧元调整至40欧元。"
          },
          {
            label: "全链路调试与稳定性治理：",
            desc: "成功定位了因新卡支付异步时序问题导致的 Card Bin 字段丢失根因，并设计\"延迟解析\"方案从 MQ 回调消息中回补数据，确保了数据完整性。"
          }
        ]
      },
      {
        title: "主导项目：Lazada 支付链路 AIOps 与智能诊断 Agent 平台",
        details: [
          {
            label: "AI Agent 架构设计：",
            desc: "基于 Spring AI 框架构建支付域智能体底座，通过 MCP 协议统一封装 SLS 日志查询、EagleEye 全链路监控、ODPS 数据查询等工具。"
          },
          {
            label: "RAG 知识库系统：",
            desc: "构建文档向量化存储与检索全链路，通过文档分块与 TopK 参数深度调优，知识检索准确率提升至 85% 以上。"
          },
          {
            label: "对话 Agent：",
            desc: "基于 ReAct 模式实现，支持多轮对话上下文记忆，实现业务咨询、告警自救、工单预处理等场景无缝切换。"
          },
          {
            label: "AIOps 智能运维 Agent：",
            desc: "基于 Plan-Execute-Replan 模式实现，构建了\"检索知识库->规划排查步骤->调用工具查询->分析根因->生成建议\"的完整闭环流程。"
          },
          {
            label: "支付成功率分析 Agent：",
            desc: "针对核心指标波动，设计 L4(意图路由) + L5(数据分析) 双层架构。采用\"白盒化\"模式融合 ODPS 离线数仓与标准差/线性回归算法，解决大模型处理复杂报表时的幻觉问题。"
          }
        ]
      }
    ],
    techStack: ["Spring AI", "ReAct", "Plan-Execute-Replan", "MCP", "RAG", "SLS", "ODPS"],
  },
  {
    logo: "/dongfangsiwei.jpg",
    company: "广东交通集团 - 东方思维",
    role: "企业信息化部门 · 后端开发实习生",
    period: "2024.06 - 2024.08",
    location: "广州",
    summary: "参与企业信息化系统的后端研发，负责身份认证、文件存储、性能优化及实时消息推送等核心模块。",
    projects: [
      {
        title: "身份认证与安全",
        details: [
          {
            label: "安全与认证：",
            desc: "通过 JWT 令牌和 Spring 拦截器相结合的方案，实现了集群环境下无状态的用户身份认证；采用 SHA-256 加密算法结合 Salt 策略，对用户密码进行哈希存储，有效防范彩虹表攻击和暴力破解。"
          }
        ]
      },
      {
        title: "分布式文件存储",
        details: [
          {
            label: "文件存储优化：",
            desc: "优化了文件上传模块，基于 MinIO 实现了文件的分片上传、断点续传以及极速秒传功能。"
          }
        ]
      },
      {
        title: "数据库性能调优",
        details: [
          {
            label: "查询优化：",
            desc: "针对员工档案分页查询场景，使用延迟关联技术解决了深度分页问题，查询耗时从 2.3s 降至 0.8s。"
          }
        ]
      },
      {
        title: "实时消息推送",
        details: [
          {
            label: "WebSocket 服务：",
            desc: "基于 WebSocket 构建了高可用的实时消息推送服务，为用户提供秒级的待办提醒。"
          }
        ]
      }
    ],
    techStack: ["Java", "Spring Boot", "JWT", "MinIO", "MySQL", "WebSocket"],
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
                      <Image src={exp.logo} alt={exp.company} width={80} height={80} className="object-contain" />
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-2 text-sm text-foreground-muted justify-center mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-background-alt rounded text-sm">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="lg:col-span-4 p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-display font-semibold text-foreground mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>

                    <p className="text-foreground-muted mb-6">{exp.summary}</p>

                    {/* Projects */}
                    <div className="space-y-5 mb-6">
                      {exp.projects.map((project, projIndex) => (
                        <div key={projIndex}>
                          <h4 className="text-base font-semibold text-foreground mb-2">{project.title}</h4>
                          <div className="space-y-2">
                            {project.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-foreground-muted text-sm">
                                  <span className="font-semibold text-foreground">{detail.label}</span>
                                  {detail.desc}
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
