import ProfileBlock from "./components/ProfileBlock";
import IntroBlock from "./components/IntroBlock";

import "./App.css";

function App() {
  return (
    <div className="w-[90dvw] max-w-[800px] mx-auto">
      <ProfileBlock></ProfileBlock>
      <IntroBlock></IntroBlock>
    </div>
  );
}

export default App;
