import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Sertificate from "./sections/Sertificate";
import PersonalProjects from "./sections/PersonalProject";

import AntigravityBackground from "./components/AntigravityBackground";

function App() {
  return (
    <div
      className="
        relative min-h-screen
        bg-gradient-to-b from-[#020617] via-[#020b3a] to-[#020617]
        text-slate-50
        overflow-hidden
      "
    >
      <AntigravityBackground />

      {/* Semua konten di atas antigravity */}
      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 pb-16 pt-8">
          <Hero />
          <About />
          <Projects />
          <PersonalProjects />
          <Sertificate />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
