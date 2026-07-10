import { ArrowRight, FileText } from "lucide-react";
import { notes, stats } from "@/data/content";
import { GlassPanel } from "./GlassPanel";

export function KnowledgeOrbit() {
  return (
    <div className="orbit-stage" aria-label="知识轨道概览">
      <div className="orbit-visual" aria-hidden="true">
        <div className="orbit orbit-one">
          <span className="node node-cyan" />
        </div>
        <div className="orbit orbit-two">
          <span className="node node-violet" />
        </div>
        <div className="orbit orbit-three" />
        <div className="orbit-core" />
      </div>

      <GlassPanel className="orbit-panel map-panel">
        <h2>知识地图</h2>
        <div className="tag-row">
          <span>产品思考</span>
          <span>AI实践</span>
          <span>长期主义</span>
        </div>
      </GlassPanel>

      <GlassPanel className="orbit-panel stats-panel">
        {stats.map((item) => (
          <div className="stat-row" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </GlassPanel>

      <GlassPanel className="orbit-panel updates-panel">
        <h2>最近更新</h2>
        <div>
          {notes.slice(0, 2).map((note) => (
            <a className="update-link" href={`#note-${note.id}`} key={note.id}>
              <FileText aria-hidden="true" className="h-5 w-5" />
              <span>{note.title}</span>
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </a>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
}
