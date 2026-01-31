import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { ValueProp } from "@/components/ValueProp";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <TechStack />
      <ValueProp />
      <Contact />
    </main>
  );
}
