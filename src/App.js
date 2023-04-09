import SkillCard from "./components/SkillCards/SkillCards";

function App() {
  return (
    <div className="lg:w-1/2 place-content-center">
      <div className="flex flex-col lg:flex-row">
        {/* Result component */}
        <div className="flex-1">
          <div
            style={{
              background:
                "linear-gradient(to bottom, hsl(234, 85%, 45%), hsl(241, 81%, 54%)",
            }}
            className="h-52 text-center"
          >
            Your results
          </div>
        </div>
        <div className="flex-1">
          <h3>Summary</h3>
          <SkillCard />
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
