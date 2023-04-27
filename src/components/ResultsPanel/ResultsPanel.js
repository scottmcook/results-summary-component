import "./ResultsPanel.css";

export default function ResultsPanel() {
  return (
    <div className="flex flex-col content-center">
      <h2 className="mt-6 mb-4 results-panel__header text-xl">Your Result</h2>
      <div className="my-2 flex-1 self-center">
        <div className="results-panel__score flex-col">
          <div className="mb-2">
            <span className="results-panel__score--bold text-6xl">76</span>
          </div>
          <div className="results-panel__score-p">of 100</div>
        </div>
      </div>
      <h3 className="text-2xl mt-6 mb-4 text-white">Great</h3>
      <p className="xl:mx-8 leading-tight pb-8 mx-12">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
