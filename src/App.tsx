import Sidebar from "./components/Sidebar";
import IntroBlock from "./components/IntroBlock";
import WorkExpBlock from "./components/WorkExpBlock";
import EducationExpBlock from "./components/EducationExpBlock";
import ProjectExpBlock from "./components/ProjectExpBlock";
import CompetitionExpBlock from "./components/CompetitionExpBlock";

import "./App.css";

function App() {
  return (
    <div className="min-h-dvh">
      <div className="mx-auto w-[90dvw] max-w-[1080px] py-12 md:py-20 flex flex-col md:flex-row gap-12 md:gap-16">
        <div className="md:w-[300px] md:shrink-0">
          <Sidebar />
        </div>
        <main className="min-w-0 flex-1">
          <IntroBlock />
          <div className="mt-12 flex flex-col">
            <WorkExpBlock />
            <EducationExpBlock />
            <ProjectExpBlock />
            <CompetitionExpBlock />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
