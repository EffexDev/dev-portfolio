import DarkmodeButton from "./components/DarkModeButton";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./index.css"

export default function App() {

  return (
    <div className="flex justify-center h-full px-5 py-5 dark:bg-black/90 dark:text-white">
      <div className="w-full max-w-2xl">
        <Header />
        <Skills />
        <WorkExperience />
        <Projects />
        <DarkmodeButton />
      </div>
    </div>
  );
}