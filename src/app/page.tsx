import About from "../components/Intro/About";
import Intro from "../components/Intro/Intro";
import Projects from "../components/Projects";
import Section from "../components/Section";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <Section />
      <About />
      <Projects />
    </main>
  )
}
