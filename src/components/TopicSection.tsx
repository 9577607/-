import { ArrowRight } from "lucide-react";
import { topics } from "@/data/content";

export function TopicSection() {
  return (
    <section className="content-section" id="topics">
      <div className="section-heading">
        <span>Knowledge Topics</span>
        <h2>知识主题</h2>
      </div>
      <div className="topic-grid">
        {topics.map((topic) => (
          <a className="topic-card" href={`#topic-${topic.id}`} id={`topic-${topic.id}`} key={topic.id}>
            <div>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
            <span>
              {topic.count} 篇
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
