import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden relative bg-[#f4f7fb]">
      {/* Global Blurred Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#009ca6]/10 rounded-full blur-[100px] md:blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#0B253D]/10 rounded-full blur-[100px] md:blur-[140px]" />
        <div className="absolute top-[40%] left-[50%] w-[40vw] h-[40vw] bg-[#009ca6]/5 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 w-full flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
