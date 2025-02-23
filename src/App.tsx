import DarkmodeButton from "./components/DarkModeButton";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./index.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.3 // Stagger each child component animation
    } 
  }
};

const itemVariants = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function App() {
  return (
    <motion.div 
    className="flex justify-center h-full px-5 py-5 
    bg-gradient-to-br from-white to-gray-300 via-gray-100 
    dark:from-gray-900 dark:via-gray-800 dark:to-black 
    sm:bg-radial sm:from-white sm:to-gray-300 sm:via-gray-100 
    sm:dark:bg-radial sm:dark:from-gray-900 sm:dark:to-black sm:dark:via-gray-900 
    dark:text-white"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className="w-full max-w-2xl">
        <motion.div variants={itemVariants}><Header /></motion.div>
        <motion.div variants={itemVariants}><Skills /></motion.div>
        <motion.div variants={itemVariants}><WorkExperience /></motion.div>
        <motion.div variants={itemVariants}><Projects /></motion.div>
        <motion.div variants={itemVariants}><DarkmodeButton /></motion.div>
      </motion.div>
    </motion.div>
  );
}
