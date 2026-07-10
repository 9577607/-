import { ArrowUpRight } from "lucide-react";
import { notes } from "@/data/content";

export function LatestNotes() {
  return (
    <section className="content-section" id="notes">
      <div className="section-heading">
        <span>Latest Notes</span>
        <h2>最近笔记</h2>
      </div>
      <div className="note-list">
        {notes.map((note) => (
          <article className="note-row" id={`note-${note.id}`} key={note.id}>
            <div>
              <span className="note-category">{note.category}</span>
              <h3>{note.title}</h3>
              <p>{note.summary}</p>
            </div>
            <div className="note-meta">
              <span>{note.date}</span>
              <span>{note.readTime}</span>
              <a aria-label={`查看 ${note.title}`} href={`#note-${note.id}`}>
                <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
