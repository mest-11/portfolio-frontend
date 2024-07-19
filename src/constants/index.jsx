import { FolderOpenDot, GraduationCap, Home, Linkedin, NotebookPen, ScrollText, Trophy, UserRound } from "lucide-react";



const K = {

   NAVLINKS: [
      {
         icon: <Home />,
         text: "Overview",
         link: "/dashboard"
      },
      {
         icon: <UserRound />,
         text: "Bio",
         link: "/dashboard/bio"
      },
      {
         icon: <Trophy />,
         text: "Achievements",
         link: "/dashboard/achievements"
      },
      {
         icon: <ScrollText />,
         text: "Experience",
         link: "/dashboard/experience",
      },
      {
         icon: <FolderOpenDot />,
         text: "Projects",
         link: "/dashboard/projects",
      },
      {
         icon: <NotebookPen />,
         text: "Skills",
         link: "/dashboard/skills"
      },
      {
         icon: <GraduationCap />,
         text: "Education",
         link: "/dashboard/education"
      },
   ],

   SKILLS:
      [
         {
            name: "JavaScript",
            levelOfProficiency: "Beginner"
         },
         {
            name: "Html",
            levelOfProficiency: "Beginner"
         },
         {
            name: "Python",
            levelOfProficiency: "intermmediate"
         },
         {
            name: "React",
            levelOfProficiency: "Advanced"
         },
         {
            name: "Vue",
            levelOfProficiency: "Advanced"
         },
      ],

   OVERVIEW:
      [
         {
            icon: <NotebookPen />,
            text: "skills",
            total: 10
         },
         {
            icon: <GraduationCap />,
            text: "education",
            total: 3
         },
         {
            icon: <Trophy />,
            text: "achievements",
            total: 20
         },
         {
            icon: <ScrollText />,
            text: "experience",
            total: 50
         },
         {
            icon: <FolderOpenDot />,
            text: "projects",
            total: 100
         },
      ]

};

export default K;