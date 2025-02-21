import DarkmodeButton from "./components/DarkModeButton";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import "./index.css"

export default function App() {

  return (
    <div className="flex justify-center h-screen px-10 py-20 dark:bg-gray-800 dark:text-white">
      <div className="w-full max-w-2xl">
        <Header />
        <Skills />
        <WorkExperience />
        <DarkmodeButton />
      </div>
  
    </div>
  );
}