import { ArrowRight } from "lucide-react";
import type { Note, SearchItem } from "@/lib/content";
import { KnowledgeOrbit } from "./KnowledgeOrbit";
import { SearchBar } from "./SearchBar";

type HeroProps = {
  notes: Note[];
  searchItems: SearchItem[];
  stats: { label: string; value: string }[];
};

export function Hero({ notes, searchItems, stats }: HeroProps) {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <div className="status-pill reveal reveal-one">
          <span />
          Knowledge Base · Notes · Ideas
        </div>
        <h1 className="hero-title reveal reveal-two">FanXin</h1>
        <p className="hero-subtitle reveal reveal-three">
          把经验写成知识，让思考持续生长。
        </p>
        <div className="reveal reveal-four">
          <SearchBar items={searchItems} />
        </div>
        <div className="hero-actions reveal reveal-five">
          <a className="primary-action" href="#notes">
            进入知识库
          </a>
          <a className="text-action" href="#about">
            关于我
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="hero-orbit reveal reveal-three">
        <KnowledgeOrbit notes={notes} stats={stats} />
      </div>
    </section>
  );
}
