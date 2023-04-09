import SkillCard from "./components/SkillCards/SkillCards";

function App() {
  return (
    <div className="xl:w-1/2 place-content-center xl:rounded-lg shadow-md">
      <div className="flex flex-col xl:flex-row">
        {/* Result component */}
        <div className="flex-1 ">
          <div
            style={{
              background:
                "linear-gradient(0deg, hsl(234, 85%, 45%), hsl(241, 81%, 54%)",
            }}
            className="h-52 rounded-b-lg xl:rounded-lg text-center"
          >
            Your results
          </div>
        </div>
        <div className="flex-1 px-6">
          <h3>Summary</h3>
          <SkillCard />
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
