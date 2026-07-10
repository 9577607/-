# FanXin 个人博客知识库

把经验写成知识，让思考持续生长。

这是一个使用 Next.js、TypeScript 和 Tailwind CSS 构建的个人博客知识库首页，包含品牌首屏、知识搜索、知识轨道视觉、最近笔记、主题、项目和关于模块。

## 开发

```bash
npm install
npm run dev
```

## 验证

```bash
npm run lint
npm run build
```

## 更新内容

笔记和项目内容放在 `content/` 目录下，首页会自动读取这些 MDX 文件的 frontmatter。

新增笔记：

```txt
content/notes/my-new-note.mdx
```

```mdx
---
title: 我的新笔记
category: AI与效率
date: 2026.07.10
readTime: 5 min
summary: 这里写一句简短摘要。
---

这里写正文内容。
```

新增项目：

```txt
content/projects/my-project.mdx
```

```mdx
---
name: My Project
description: 项目简介。
tags:
  - AI
  - Product
---

这里写项目说明。
```

修改或新增 MDX 文件后，重新部署即可更新首页列表、统计和搜索结果。
