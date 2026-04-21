# 技术设计文档

## 1. 技术栈概览

| 层级 | 技术选型 |
|------|---------|
| 框架 | Next.js 14 (App Router) |
| 样式 | Tailwind CSS |
| 内容 | 静态 Markdown 文件 |
| 部署 | Vercel |
| 域名 | 待定 |

---

## 2. 架构设计

### 2.1 页面结构

```
/                    → 首页（自我介绍）
/about              → 个人经历
/experience         → 工作经历
/projects           → 项目经历
/blog               → 博客列表
/blog/[slug]        → 博客详情
/resume             → 简历查看
/contact            → 联系方式
```

### 2.2 目录结构

```
/
├── app/                    # Next.js App Router
│   ├── page.tsx            # 首页
│   ├── about/page.tsx
│   ├── experience/page.tsx
│   ├── projects/page.tsx
│   ├── blog/
│   │   ├── page.tsx        # 博客列表
│   │   └── [slug]/page.tsx # 博客详情
│   ├── resume/page.tsx
│   └── contact/page.tsx
├── components/             # 组件
│   ├── layout/             # 布局组件
│   ├── ui/                 # UI 组件
│   └── sections/           # 页面区块
├── content/                # Markdown 内容
│   └── blog/              # 博客文章
├── public/                 # 静态资源
│   └── resume.pdf          # 简历
├── styles/                 # 全局样式
└── lib/                    # 工具函数
```

---

## 3. 技术选型详情

### 3.1 Next.js 14 (App Router)

- **原因**：静态站点生成（SSG）性能优秀，App Router 是最新标准
- **渲染模式**：主要使用 SSG，部分页面可选 ISR

### 3.2 Tailwind CSS

- **原因**：快速开发，响应式设计天然支持，配套 CDN 用量少
- **插件**：@tailwindcss/typography（博客文章样式）

### 3.3 Markdown 处理

- **方案**：next-mdx-remote 或 gray-matter + remark
- **流程**：读取 `.md` 文件 → 解析 frontmatter → 渲染 HTML

### 3.4 部署

- **平台**：Vercel
- **流程**：Git push → 自动构建部署
- **域名**：待购买后配置

---

## 4. 依赖清单

```json
{
  "next": "^14.x",
  "react": "^18.x",
  "tailwindcss": "^3.x",
  "next-mdx-remote": "^4.x",
  "gray-matter": "^4.x",
  "remark": "^14.x",
  "remark-html": "^15.x",
  "date-fns": "^3.x",
  "lucide-react": "^0.x"
}
```

---

## 5. 环境要求

- Node.js >= 18.x
- npm / yarn / pnpm

---

## 6. 开发规范

### 6.1 Git 规范

- 分支：main（主分支）, dev（开发分支）
- Commit message：中文简述

### 6.2 组件规范

- 组件文件：`PascalCase.tsx`
- 工具函数：`camelCase.ts`

---

## 7. 待确认

- [ ] 域名选择
- [ ] 博客分类/标签结构
- [ ] 项目经历具体内容
- [ ] 工作经历具体内容
