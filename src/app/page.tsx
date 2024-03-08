import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import SectionSeperator from "../components/Section";
import Skills from "../components/Skills";
import Blog from "../components/Blog";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <SectionSeperator />
      <About />
      <Experience />
      <Blog />
      <Projects />
      <Skills />
      <Contact/>
    </main>
  )
}
