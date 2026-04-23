# 个人技术作品集 - 技术文档

## 1. 项目概述

这是一个基于 Next.js 16 构建的个人技术作品集网站，用于展示个人信息、工作经历、项目作品和技术博客。

- **技术框架**: Next.js 16 + React 19 + TypeScript
- **样式方案**: Tailwind CSS 4 + CSS 变量
- **部署状态**: 本地开发中

---

## 2. 技术栈

### 核心框架
- **Next.js**: 16.2.4 (App Router)
- **React**: 19.2.4
- **TypeScript**: 5

### UI 库
- **Tailwind CSS**: 4 (CSS-first 配置)
- **Lucide React**: 1.8.0 (图标库)

### 字体
- **Outfit**: 标题字体 (400-800)
- **DM Sans**: 正文字体 (400-700)
- **JetBrains Mono**: 等宽字体 (代码/标签)

### 其他依赖
- **next-intl**: 4.9.1 (国际化)
- **date-fns**: 日期格式化
- **gray-matter**: 博客元数据解析
- **remark/remark-html**: Markdown 渲染

---

## 3. 已实现页面

### 首页 (`/`)
- Hero 区域：头像、姓名、职位介绍
- 技术标签展示
- CTA 按钮：了解更多信息、下载简历
- 关于预览区块
- 工作经历预览区块
- 项目作品预览区块
- CTA 联系区域

### 关于页面 (`/about`)
- Hero 区域
- 教育背景（山东大学）
- 专业技能分类展示（编程语言、后端框架、数据库、中间件、DevOps、工具）
- 荣誉成就
- 成长历程时间线

### 经历页面 (`/experience`)
- Hero 区域
- 工作经历卡片：
  - 左侧：公司 Logo + 时间 + 地点
  - 右侧：项目详情（带标签强调）
- 技术栈标签
- CTA 跳转项目页面

**当前经历数据**:
- 阿里巴巴 - 阿里国际（电商支付部门）
- 广东交通集团 - 东方思维

### 项目页面 (`/projects`)
- Featured 项目（大卡片布局）
- Other 项目（网格布局）
- 项目详情：描述、技术栈、亮点
- GitHub/在线链接

**当前项目数据**:
- 分布式任务调度系统
- 微服务电商系统
- 数据采集分析平台
- 墨砚（Markdown 笔记应用）

### 博客页面 (`/blog`)
- 文章列表（卡片布局）
- 文章元数据：日期、阅读时间、标签
- 订阅功能区块

### 简历页面 (`/resume`)
- PDF 预览/下载/打印按钮
- 简历信息卡片

### 联系页面 (`/contact`)
- 联系方式卡片（邮箱、GitHub、微信、位置）
- 社交媒体链接

---

## 4. 组件结构

```
components/
├── layout/
│   ├── Navbar.tsx       # 导航栏（滚动效果、移动端菜单、主题切换）
│   └── Footer.tsx       # 页脚
├── providers/
│   ├── ThemeProvider.tsx    # 主题 Provider（浅色/深色）
│   └── ThemeToggle.tsx      # 主题切换按钮
```

### 共享组件
- `app/page.tsx` 中的 Hero 区域组件
- `app/blog/page.tsx` 中的文章卡片
- 各页面复用的图标组件

---

## 5. 样式系统

### 主题配色
```css
--primary: #2563EB;      /* 主色 - 蓝色 */
--accent: #3B82F6;       /* 强调色 */
--background: #FFFFFF;   /* 背景色 */
--foreground: #1E293B;   /* 前景色 */
--card: #FFFFFF;         /* 卡片背景 */
--border: #E2E8F0;       /* 边框色 */
```

### 深色主题
通过 `[data-theme="dark"]` 选择器切换，CSS 变量覆盖

### 动画效果
- `animate-fade-in-up`: 向上淡入
- `animate-fade-in`: 淡入
- `animate-float`: 浮动
- `animate-spin-slow`: 慢速旋转
- `text-gradient`: 渐变文字

### 工具类
- `bg-grid`: 网格背景
- `glass`: 玻璃态效果
- `shadow-lg/shadow-primary/25`: 阴影效果

---

## 6. 全局样式配置

### CSS 变量（定义在 `globals.css`）
- 颜色系统（主题色、背景色、文字色、卡片色、边框色）
- 字体变量（display、body、mono）
- 滚动条样式
- 选中文字样式

### Tailwind 配置
- `@theme inline` 将 CSS 变量映射为 Tailwind 工具类
- 自定义颜色：`primary`, `accent`, `background`, `card` 等

---

## 7. 路由结构

```
app/
├── page.tsx              # 首页 /
├── about/page.tsx        # 关于 /about
├── experience/page.tsx   # 经历 /experience
├── projects/page.tsx     # 项目 /projects
├── blog/
│   ├── page.tsx         # 博客列表 /blog
│   └── [slug]/page.tsx  # 博客详情 /blog/:slug
├── resume/page.tsx       # 简历 /resume
└── contact/page.tsx      # 联系 /contact
```

---

## 8. 静态资源

```
public/
├── xiaoman.jpg           # 头像
├── alibaba.png           # 阿里 Logo
├── dongfangsiwei.jpg     # 东方思维 Logo
├── 山东大学-logo.png     # 学校 Logo
└── 山东大学-张栩睿.pdf   # 简历 PDF
```

---

## 9. 功能特性

### 已实现
- [x] 响应式布局（移动端/桌面端）
- [x] 浅色/深色主题切换
- [x] 平滑滚动
- [x] 页面加载动画
- [x] 滚动触发的导航栏样式变化
- [x] 移动端汉堡菜单
- [x] PDF 预览/下载/打印

### 待实现
- [ ] 博客详情页内容渲染
- [ ] 国际化（i18n）
- [ ] 联系表单
- [ ] 订阅功能
- [ ] 动画滚动视差效果

---

## 10. 开发命令

```bash
npm run dev      # 开发服务器
npm run build    # 生产构建
npm run start    # 生产服务器
npm run lint     # ESLint 检查
```