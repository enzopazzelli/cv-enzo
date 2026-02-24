import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import OtherSkills from "./components/OtherSkills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Background effects */}
      <div className="bg-grid" />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Education />
        <OtherSkills />
      </main>
      <Footer />
    </>
  );
}
