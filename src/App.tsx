import "./App.css";
import AboutMeSection from "./components/AboutMeSection";
import HeroSection from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";

function App() {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
