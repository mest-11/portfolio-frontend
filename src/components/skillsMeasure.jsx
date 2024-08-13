const CircularSkill = ({ name, levelOfProficiency }) => {
  const circleRadius = 30;
  const circumference = 2 * Math.PI * circleRadius;

  let skillLevel;
  let strokeDashoffset;

  if (levelOfProficiency === 'beginner') {
    skillLevel = 'Beginner';
    strokeDashoffset = circumference - (25 / 100) * circumference; // Represent Beginner as 25%
  } else if (levelOfProficiency === 'intermediate') {
    skillLevel = 'Intermediate';
    strokeDashoffset = circumference - (80 / 100) * circumference; // Represent Intermediate as 65%
  } else if (levelOfProficiency === 'advanced') {
    skillLevel = 'Advanced';
    strokeDashoffset = circumference - (100 / 100) * circumference; // Represent Advanced as 100%
  } else {
    skillLevel = 'Beginner'; // Default to Beginner for unexpected values
    strokeDashoffset = circumference - (25 / 100) * circumference;
  }

  console.log(`Skill: ${name}, Level: ${levelOfProficiency}, StrokeDashoffset: ${strokeDashoffset}`);

  return (
    <div className="flex flex-col items-center justify-center">
      <svg className="w-20 h-20 mb-2">
        <circle
          cx="40"
          cy="40"
          r={circleRadius}
          stroke="black"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r={circleRadius}
          stroke="#faa826"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s' }}
        />
      </svg>
      <span className="text-[20px] font-medium antialiased ">{name}</span>
      <span className="text-[15px] font-light italic">{skillLevel}</span>
    </div>
  );
};

export default CircularSkill;
