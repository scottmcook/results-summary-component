import "./results-panel.css";

export default function ResultsPanel() {
  return (
    <div className="flex-1 rounded-b-3xl xl:rounded-3xl text-center results-panel__background">
      <div className="flex flex-col">
        <div className="my-4 results-panel__header">Your Result</div>
        <div className="my-4 results-panel__score">
          <div
            className="results-panel__score--background rounded-full"
            style={{ backgroundColor: "black" }}
          >
            <span className="results-panel__score--bold text-5xl">76</span>
            <br />
            of 100
          </div>
        </div>
        <h3 className="my-4">Great</h3>
        <p className="mt-4 mb-8 px-6 leading-tight">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
