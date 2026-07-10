export function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="section-heading">
        <span>About FanXin</span>
        <h2>关于我</h2>
      </div>
      <div className="about-copy">
        <p>
          FanXin 关注 AI 应用、产品思考、品牌运营、本地生活营销与长期个人系统建设。这个知识库用于沉淀项目现场、日常观察和反复验证过的方法，让经验变成可检索、可复用、可持续生长的能力资产。
        </p>
        <p>
          求职方向上，重点呈现大语言模型、AIGC、多模态生成、RAG 知识库、AI Agent、MCP 和自动化工作流的实践能力，并结合内容生产、短视频运营、本地生活营销和企业业务提效展示落地经验。
        </p>
        <div className="about-skills" aria-label="求职能力关键词">
          {[
            "GPT / DeepSeek / 通义千问",
            "Prompt Engineering",
            "AIGC 图像与视频",
            "RAG 与向量检索",
            "AI Agent / MCP",
            "Coze / Dify / n8n",
            "多模态内容生产",
            "抖音本地生活运营",
            "短视频脚本与直播复盘",
            "AI 工具落地与团队提效"
          ].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
        <p>
          核心表达：熟悉大语言模型、AIGC、多模态生成、AI Agent 及自动化工作流，能够将人工智能技术应用于内容生产、短视频运营、本地生活营销和企业业务提效。具备从需求分析、方案策划到项目落地及数据复盘的完整实战能力。
        </p>
      </div>
    </section>
  );
}
