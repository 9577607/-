import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Note = {
  id: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  body: string;
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
  githubUrl: string;
  body: string;
};

export type SearchItem = {
  id: string;
  type: "Note" | "Topic" | "Project";
  title: string;
  detail: string;
  href: string;
};

const contentRoot = path.join(process.cwd(), "content");

function slugFromFilename(filename: string) {
  return filename.replace(/\.mdx?$/, "");
}

function readMdxDirectory<T>(
  directory: string,
  mapEntry: (entry: { slug: string; data: matter.GrayMatterFile<string>["data"]; body: string }) => T
) {
  const dir = path.join(contentRoot, directory);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(path.join(dir, file), "utf8");
      const parsed = matter(source);
      return mapEntry({
        slug: slugFromFilename(file),
        data: parsed.data,
        body: parsed.content.trim()
      });
    });
}

export function getNotes(): Note[] {
  return readMdxDirectory("notes", ({ slug, data, body }) => ({
    id: slug,
    category: String(data.category ?? "未分类"),
    title: String(data.title ?? slug),
    summary: String(data.summary ?? ""),
    date: String(data.date ?? ""),
    readTime: String(data.readTime ?? ""),
    body
  })).sort((a, b) => b.date.localeCompare(a.date));
}

export function getProjects(): Project[] {
  return readMdxDirectory("projects", ({ slug, data, body }) => ({
    id: slug,
    name: String(data.name ?? slug),
    description: String(data.description ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    githubUrl: String(data.githubUrl ?? `#project-${slug}`),
    body
  }));
}

export function getTopics(notes = getNotes()): Topic[] {
  const topicCopy: Record<string, string> = {
    "AI与效率": "工具、提示词、自动化与个人工作流。",
    AI实践: "RAG、Agent、MCP 与企业智能应用落地。",
    产品思考: "需求判断、体验结构和长期价值。",
    本地生活: "城市观察、消费体验和生活方式。",
    品牌运营: "内容表达、传播节奏和个人品牌。",
    项目复盘: "从交付现场回收方法和模型。",
    长期主义: "复利、耐心和可持续的个人系统。"
  };

  const fixedOrder = ["AI与效率", "AI实践", "产品思考", "本地生活", "品牌运营", "项目复盘", "长期主义"];
  const counts = new Map<string, number>();

  notes.forEach((note) => {
    counts.set(note.category, (counts.get(note.category) ?? 0) + 1);
  });

  return fixedOrder.map((title) => ({
    id: title.toLowerCase().replace(/[^\p{Letter}\p{Number}]+/gu, "-"),
    title,
    description: topicCopy[title],
    count: counts.get(title) ?? 0
  }));
}

export function getStats(notes = getNotes(), topics = getTopics(notes), projects = getProjects()) {
  return [
    { label: "Notes", value: String(notes.length) },
    { label: "Topics", value: String(topics.length) },
    { label: "Projects", value: String(projects.length) }
  ];
}

export function getSearchItems(
  notes = getNotes(),
  topics = getTopics(notes),
  projects = getProjects()
): SearchItem[] {
  return [
    ...notes.map((item) => ({
      id: item.id,
      type: "Note" as const,
      title: item.title,
      detail: `${item.category} · ${item.readTime}`,
      href: `/notes/${item.id}`
    })),
    ...topics.map((item) => ({
      id: item.id,
      type: "Topic" as const,
      title: item.title,
      detail: `${item.count} 篇内容`,
      href: `#topic-${item.id}`
    })),
    ...projects.map((item) => ({
      id: item.id,
      type: "Project" as const,
      title: item.name,
      detail: item.tags.join(" · "),
      href: item.githubUrl
    }))
  ];
}
