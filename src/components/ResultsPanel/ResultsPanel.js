import "./ResultsPanel.css";

export default function ResultsPanel() {
  return (
    <div className="flex-1 rounded-b-3xl xl:rounded-3xl text-center results-panel__background">
      <div className="flex flex-col content-center">
        <div className="mt-6 mb-2 results-panel__header">Your Result</div>
        <div className="my-2 flex-1 self-center">
          <div className="results-panel__score flex-col">
            <div className="mb-2">
              <span className="results-panel__score--bold text-6xl">76</span>
            </div>
            <div className="results-panel__score-p">of 100</div>
          </div>
        </div>
        <h3 className="my-2">Great</h3>
        <p className="mb-10 px-6 leading-tight">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
