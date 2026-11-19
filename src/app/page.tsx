import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import About from "@/components/about";
import Journey from "@/components/journey";
import Projects from "@/components/projects";
import { AboutInfo } from "@/components/about-info";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Projects />
       <AboutInfo />
       <Footer />
    </main>
  );
}