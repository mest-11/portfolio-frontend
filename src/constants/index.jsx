import { FolderOpenDot, GraduationCap, Home, Linkedin, NotebookPen, ScanEye, ScrollText, Trophy, UserRound } from "lucide-react";



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
      {
         icon:<ScanEye/>,
         text:"Preview",
         link:"/preview"
      }
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

<<<<<<< HEAD
   OVERVIEW: 
   [
      {
        icon:<NotebookPen/>,
        text:"skills",
        total:10
      },
      {
         icon:<GraduationCap/>,
         text:"education",
         total:3
      },
      {
         icon:<Trophy/>,
         text:"achievements",
         total:20
      },
      {
         icon:<ScrollText/>,
         text:"experience",
         total:50
      },
      {
         icon:<FolderOpenDot/>,
         text:"projects",
         total:100
      },
   ],
   EDUCATION:
   [
      {
         icon:<GraduationCap/>,
         name:"Kwame Nkrumah University of Science And TEchnology",
         Degree:3
      },
   ]
   
=======
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

>>>>>>> d79e311f088d8342109a4fb6340f4fb197760229
};

export default K;