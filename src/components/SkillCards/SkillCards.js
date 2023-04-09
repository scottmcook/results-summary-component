import scores from '../../data.json';

export default function SkillCard() {
	const scoreCard = scores.map(score => 
		<div className='flex bg-teal-200' style={{backgroundColor: `${score.backgroundColor}`}}>
			<img src={score.icon} alt={score.category} />
			{score.category}
			{score.score} / 100
		</div>	
	) 
	return (
		<div className='flex flex-col'>
			{scoreCard}
		</div>
	)
}