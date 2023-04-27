import SkillCard from "./components/SkillCards/SkillCards";
import ResultsPanel from "./components/ResultsPanel/ResultsPanel";

function App() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="rounded-3xl xl:shadow-md">
        <div className="flex flex-col xl:flex-row">
          <div className="rounded-b-3xl text-center results-panel__background sm:pb-8 xl:w-80 xl:rounded-3xl">
            <ResultsPanel />
          </div>
          <div className="xl:w-80 px-6">
            <h3 className="text-xl mt-6 my-2">Summary</h3>
            <SkillCard />
            <button className="my-6 mb-8 flex-1 py-3 rounded-full">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
