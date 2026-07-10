export type Note = {
  id: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
};

export type Topic = {
  id: string;
  title: string;
  description: string;
  count: number;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  tags: string[];
};

export const notes: Note[] = [
  {
    id: "second-brain",
    category: "AI与效率",
    title: "构建第二大脑",
    summary: "用稳定的输入、整理和回看机制，把灵感变成可复用的知识资产。",
    date: "2026.07.01",
    readTime: "8 min"
  },
  {
    id: "project-methods",
    category: "项目复盘",
    title: "从项目中提炼方法",
    summary: "把一次性交付拆解为判断、流程和模板，沉淀下一次更快启动的路径。",
    date: "2026.06.24",
    readTime: "6 min"
  },
  {
    id: "long-term-system",
    category: "长期主义",
    title: "长期系统比短期冲刺更可靠",
    summary: "记录如何用低摩擦的周期节奏，让学习、写作和项目推进持续发生。",
    date: "2026.06.12",
    readTime: "7 min"
  },
  {
    id: "ai-workflow",
    category: "AI实践",
    title: "让 AI 成为工作流的一部分",
    summary: "从提示词、上下文管理到验收标准，建立适合个人创作的 AI 协作方式。",
    date: "2026.05.29",
    readTime: "9 min"
  }
];

export const topics: Topic[] = [
  {
    id: "ai-productivity",
    title: "AI与效率",
    description: "工具、提示词、自动化与个人工作流。",
    count: 32
  },
  {
    id: "product-thinking",
    title: "产品思考",
    description: "需求判断、体验结构和长期价值。",
    count: 26
  },
  {
    id: "local-life",
    title: "本地生活",
    description: "城市观察、消费体验和生活方式。",
    count: 18
  },
  {
    id: "brand-ops",
    title: "品牌运营",
    description: "内容表达、传播节奏和个人品牌。",
    count: 21
  },
  {
    id: "project-review",
    title: "项目复盘",
    description: "从交付现场回收方法和模型。",
    count: 14
  },
  {
    id: "long-termism",
    title: "长期主义",
    description: "复利、耐心和可持续的个人系统。",
    count: 24
  }
];

export const projects: Project[] = [
  {
    id: "knowledge-os",
    name: "Knowledge OS",
    description: "个人知识库结构、标签系统和写作复盘模板的持续迭代。",
    tags: ["Notion", "AI", "Writing"]
  },
  {
    id: "city-notes",
    name: "City Notes",
    description: "围绕本地生活、空间体验和消费决策建立的城市观察笔记。",
    tags: ["Local", "Research", "Life"]
  },
  {
    id: "launch-playbook",
    name: "Launch Playbook",
    description: "把品牌启动、内容发布和项目交付整理成轻量化行动手册。",
    tags: ["Brand", "Product", "Ops"]
  }
];

export const stats = [
  { label: "Notes", value: "128" },
  { label: "Topics", value: "24" },
  { label: "Projects", value: "12" }
];

export const navItems = [
  { label: "Notes", href: "#notes" },
  { label: "Topics", href: "#topics" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" }
];

export const searchItems = [
  ...notes.map((item) => ({
    id: item.id,
    type: "Note",
    title: item.title,
    detail: `${item.category} · ${item.readTime}`,
    href: `#note-${item.id}`
  })),
  ...topics.map((item) => ({
    id: item.id,
    type: "Topic",
    title: item.title,
    detail: `${item.count} 篇内容`,
    href: `#topic-${item.id}`
  })),
  ...projects.map((item) => ({
    id: item.id,
    type: "Project",
    title: item.name,
    detail: item.tags.join(" · "),
    href: `#project-${item.id}`
  }))
];
