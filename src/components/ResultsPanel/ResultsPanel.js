import "./results-panel.css";

export default function ResultsPanel() {
  return (
    <div className="flex-1 rounded-b-lg xl:rounded-lg text-center results-panel__background">
      <div className="flex flex-col">
        <div className="results-panel__header">Your Result</div>
        <div className="results-panel__score results-panel__score--background rounded-full">
          <span className="results-panel__score--bold text-5xl">76</span>
          <br />
          of 100
        </div>
        <h3>Great</h3>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
