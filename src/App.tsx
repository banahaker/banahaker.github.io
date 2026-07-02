import ProfileBlock from "./components/ProfileBlock";
import IntroBlock from "./components/IntroBlock";
import EducationExpBlock from "./components/EducationExpBlock";
import WorkExpBlock from "./components/WorkExpBlock";
import CompetitionExpBlock from "./components/CompetitionExpBlock";
import ProjectExpBlock from "./components/ProjectExpBlock";

import "./App.css";

function App() {
  return (
    <div className="w-[90dvw] max-w-[800px] mx-auto">
      <ProfileBlock></ProfileBlock>
      <IntroBlock></IntroBlock>
      <EducationExpBlock></EducationExpBlock>
      <WorkExpBlock></WorkExpBlock>
      <CompetitionExpBlock></CompetitionExpBlock>
      <ProjectExpBlock></ProjectExpBlock>
    </div>
  );
}

export default App;
