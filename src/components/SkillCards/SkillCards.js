import scores from "../../data.json";

export default function SkillCard() {
  const scoreCard = scores.map((score) => (
    <div
      className="flex justify-between p-3 mb-6 rounded-lg bg-teal-200"
      style={{ backgroundColor: `${score.backgroundColor}` }}
    >
      <div className="flex flex-initial">
        <img src={score.icon} alt={score.category} />
        &nbsp;&nbsp;
        <span style={{ color: `${score.fontColor}` }}>{score.category}</span>
      </div>
      <div className="flex-initial" style={{ color: "var(--dark-gray-blue)" }}>
        <span className="font-bold">{score.score}</span> / 100
      </div>
    </div>
  ));
  return <div className="flex flex-col">{scoreCard}</div>;
}
