import { useEffect, useState, useRef } from "react";
import K from "../../../constants"
import { apiGetSkills } from "../../../services/skill";
import { apiGetAchievements } from "../../../services/achievements";
import { apiGetEducation } from "../../../services/education";
import { apiGetProjects } from "../../../services/projects";
import { apiGetExperiences } from "../../../services/experiences";
import Chart from 'chart.js/auto';
import PagesLoader from "../../../components/pagesLoader";

const Overview = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [data, setdata] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    education: 0,
    experiences: 0,
    volunteering: 0,
  });
  const [isLoading, setIsLoading] = useState(false)


  const getData = async () => {
    setIsLoading(true);
    try {
      const [totalSkills, totalAchievements, totalEducation, totalExperiences, totalProjects] = await Promise.all([
        apiGetSkills(),
        apiGetAchievements(),
        apiGetEducation(),
        apiGetExperiences(),
        apiGetProjects(),
      ]);

     
      console.log("Total skills: ",totalSkills)

      const newData = {
        skills: totalSkills.length,
        projects: totalProjects.length,
        achievements: totalAchievements.length,
        education: totalEducation.length,
        experiences: totalExperiences.length,


      }
      console.log(newData);

      setdata(newData);

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }

  };

  useEffect(() => {
    getData();
          }, [])

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Check if a chart instance already exists and destroy it
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
  
    //   const xValues = ["skills", "eduaction", "experience", "USA", "Argentina"];
    // const yValues = [55, 49, 44, 24, 15];
    const barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145"
    ];
  
    let xValues = [];
    let yValues = []
  
    for (const value of K.OVERVIEW) {
      xValues.push(value.text)
      yValues.push(value.total)
    }

    console.log(xValues)
  
    chartInstanceRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          text: "Overview for Portfolio"
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });

    return () => {
      // Cleanup the chart instance when the component unmounts
      chartInstanceRef.current.destroy();
    };
  
  },[])
  
  return (
   <>
   {
    isLoading? <PagesLoader/>: <div className="p-10 ">
    <div className="grid grid-cols-5 gap-10">
      {
        K.OVERVIEW.map(({ icon, text, total }, index) => {
          return <div key={index} className="h-40 shadow-md bg-white p-6 flex flex-col justify-between">
            <div className="flex justify-between">
              <span className="text-blue-600">{icon}</span>
              <span className="text-blue-600 font-semibold">{text}</span>
            </div>
            <span className="text-2xl font-semibold">{total}</span>
          </div>

        })}
    </div>
    <div className="mt-20">
      <canvas ref={chartRef} className="w-40"></canvas>
    </div>
  </div>
   }
   </>

  );
};

export default Overview