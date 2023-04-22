import SkillCard from "./components/SkillCards/SkillCards";
import ResultsPanel from "./components/ResultsPanel/ResultsPanel";

function App() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="md:w-1/2 rounded-3xl xl:shadow-md">
        <div className="flex flex-col xl:flex-row">
          <ResultsPanel />
          <div className="flex-1 px-6">
            <h3>Summary</h3>
            <SkillCard />
            <button className="flex-1 py-3 rounded-full">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
