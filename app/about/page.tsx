import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    school: "山东大学",
    degree: "计算机科学与技术 · 本科",
    period: "2022 - 2026",
    description: "学习计算机科学与技术专业，掌握扎实的计算机基础知识",
  },
];

const achievements = [
  "多次获得校级奖学金",
  "CSP等级认证",
  "优秀毕业生",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background-alt to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              关于<span className="text-gradient"> 我</span>
            </h1>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              探索我的教育背景、专业技能与个人成长历程
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
            <h2 className="text-2xl font-display font-bold">教育背景</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground">{edu.school}</h3>
                    <p className="text-primary font-medium">{edu.degree}</p>
                  </div>
                  <div className="flex items-center gap-2 text-foreground-muted">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                </div>
                <p className="text-foreground-muted">{edu.description}</p>
              </div>
            ))}
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
            <h2 className="text-2xl font-display font-bold">专业技能</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "编程语言", skills: ["Java", "Python", "C++", "SQL"] },
              { category: "后端框架", skills: ["Spring Boot", "Spring Cloud", "MyBatis", "Spring AI"] },
              { category: "数据库", skills: ["MySQL", "PostgreSQL", "Redis"] },
              { category: "中间件", skills: ["Kafka", "RabbitMQ", "Nginx"] },
              { category: "DevOps", skills: ["Docker"] },
              { category: "工具", skills: ["Git", "Linux", "VS Code", "IntelliJ IDEA", "Claude Code"] },
            ].map((group, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <h3 className="font-display font-semibold text-lg mb-4 text-primary">{group.category}</h3>
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
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-warning" />
            </div>
            <h2 className="text-2xl font-display font-bold">荣誉成就</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-border animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="w-3 h-3 rounded-full bg-warning" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold mb-8 animate-fade-in-up">成长历程</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-8">
              {[
                { year: "2022", event: "考入山东大学计算机计算机科学与技术学院" },
                { year: "2023", event: "开始学习编程" },
                { year: "2024", event: "获得校内程序设计竞赛奖项和CSP等级认证" },
                { year: "2025", event: "阿里国际进行实习，并斩获华为、小米、阿里、荣耀、中兴等多家offer" },
                { year: "2026", event: "本科毕业，正式进入职场，就职荣耀" },
              ].map((item, index) => (
                <div key={index} className="relative pl-12 animate-fade-in-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    {item.year.slice(-2)}
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-border">
                    <span className="text-sm text-foreground-muted">{item.year}</span>
                    <p className="font-medium mt-1">{item.event}</p>
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