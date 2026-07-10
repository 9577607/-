import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LatestNotes } from "@/components/LatestNotes";
import { ProjectSection } from "@/components/ProjectSection";
import { TopicSection } from "@/components/TopicSection";
import { getNotes, getProjects, getSearchItems, getStats, getTopics } from "@/lib/content";

export default function Home() {
  const notes = getNotes();
  const projects = getProjects();
  const topics = getTopics(notes);
  const stats = getStats(notes, topics, projects);
  const searchItems = getSearchItems(notes, topics, projects);

  return (
    <>
      <Header />
      <main>
        <Hero notes={notes} searchItems={searchItems} stats={stats} />
        <div className="main-content">
          <LatestNotes notes={notes} />
          <TopicSection topics={topics} />
          <ProjectSection projects={projects} />
          <AboutSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
