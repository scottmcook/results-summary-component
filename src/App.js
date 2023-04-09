import SkillCard from "./components/SkillCards/SkillCards";

function App() {
  return (
    <div className="grid place-content-center text-3xl font-bold underline">
      {/* Result component */}
      <div style={{background: 'linear-gradient(to bottom, hsl(234, 85%, 45%), hsl(241, 81%, 54%)'}} className="h-52 text-center">Your results</div>
      <SkillCard />
      <button>Continue</button>
    </div>
  );
}

export default App;
