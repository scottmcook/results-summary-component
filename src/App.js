import SkillCard from "./components/SkillCards/SkillCards";
import ResultsPanel from "./components/ResultsPanel/ResultsPanel";

function App() {
  return (
    <div className="xl:w-1/2 place-content-center xl:rounded-3xl shadow-md">
      <div className="flex flex-col xl:flex-row">
        <ResultsPanel />
        <div className="flex-1 px-6">
          <h3>Summary</h3>
          <SkillCard />
          <button className="flex-1 py-2 rounded-full">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
