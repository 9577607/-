import { ArrowUpRight } from "lucide-react";
import type { Note } from "@/lib/content";

type LatestNotesProps = {
  notes: Note[];
};

export function LatestNotes({ notes }: LatestNotesProps) {
  return (
    <section className="content-section" id="notes">
      <div className="section-heading">
        <span>Latest Notes</span>
        <h2>最近笔记</h2>
      </div>
      <div className="note-list">
        {notes.map((note) => (
          <a className="note-row" href={`/notes/${note.id}`} id={`note-${note.id}`} key={note.id}>
            <div>
              <span className="note-category">{note.category}</span>
              <h3>{note.title}</h3>
              <p>{note.summary}</p>
            </div>
            <div className="note-meta">
              <span>{note.date}</span>
              <span>{note.readTime}</span>
              <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
