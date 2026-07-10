import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LatestNotes } from "@/components/LatestNotes";
import { ProjectSection } from "@/components/ProjectSection";
import { TopicSection } from "@/components/TopicSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="main-content">
          <LatestNotes />
          <TopicSection />
          <ProjectSection />
          <AboutSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
