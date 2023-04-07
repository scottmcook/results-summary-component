import scores from '../../data.json';

export default function SkillCard() {
	const scoreCard = scores.map(score => 
		<div className='flex bg-teal-200'>
			{score.icon}
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