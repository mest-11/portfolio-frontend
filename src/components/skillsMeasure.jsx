const CircularSkill = ({ skill, level }) => {
    const circleRadius = 30;
    const circumference = 2 * Math.PI * circleRadius;
    const strokeDashoffset = circumference - (level / 100) * circumference;
  
    return (
      <div className="flex flex-col items-center justify-center ">
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
          />
        </svg>
        <span className="text-[13px] ">{level}%</span>
        <span className="text-[20px] font-medium antialiased">{skill}</span>
      </div>
    );
  };
export default   CircularSkill;