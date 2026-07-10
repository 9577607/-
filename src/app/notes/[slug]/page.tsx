import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getNotes } from "@/lib/content";

type NotePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getNotes().map((note) => ({
    slug: note.id
  }));
}

export async function generateMetadata({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNotes().find((item) => item.id === slug);

  return {
    title: note ? `${note.title} | FanXin` : "FanXin 笔记",
    description: note?.summary
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNotes().find((item) => item.id === slug);

  if (!note) notFound();

  const paragraphs = note.body.split(/\n{2,}/).filter(Boolean);

  return (
    <>
      <Header />
      <main className="note-detail">
        <Link className="back-link" href="/#notes">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          返回笔记
        </Link>
        <article className="note-article">
          <span className="note-category">{note.category}</span>
          <h1>{note.title}</h1>
          <p className="note-lead">{note.summary}</p>
          <div className="note-detail-meta">
            <span>{note.date}</span>
            <span>{note.readTime}</span>
          </div>
          <div className="note-body">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
