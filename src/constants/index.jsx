import { FolderOpenDot, GraduationCap, GraduationCapIcon, Home, Linkedin, NotebookPen, ScanEye, ScrollText, Trophy, University, UserRound } from "lucide-react";



const K = {

   NAVLINKS: [
      {
         icon: <Home />,
         text: "Overview",
         link: "/dashboard"
      },
      {
         icon: <UserRound />,
         text: "Profile",
         link: "/dashboard/profile"
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
         icon: <ScanEye />,
         text: "Preview",
         link: "/preview"
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
      ],

   EDUCATION:
      [
         {
            name: "Kwame Nkrumah University of Science And Technology",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla.",
            date: 1999 - 2002
         },
         {
            name: "Kwame Nkrumah University of Science And Technology",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla.",
            date: 2012 - 2016
         },
         {
            name: "Harvard University",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla.",
            date: 2002 - 2004
         },
         {
            name: "University of Ghana",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla.",
            date: 2025 - 2029
         },
         {
            name: "Kwame Nkrumah University of Science And Technology",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla.",
            date: "2012 - 2016"
         },
      ],


   PROJECT:
      [
         {
            icon: <FolderOpenDot />,
            awards: "Best Designer of the Year",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla.",
            contributors:"Kwame Appiah",
            status:"in-progress",
            download:"link",
            date: "2012",
         },
         {
            icon: <FolderOpenDot />,
            awards: "Best Designer of the Year",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla.",
            contributors:"Kwame Appiah",
            status:"in-progress",
            download:"link",
            date: 2016
         },
         {
            icon: <FolderOpenDot />,
            awards: "Best Designer of the Year",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla.",
            contributors:"Kwame Appiah",
            status:"in-progress",
            download:"link",
            date: 2005
         },
         {
            icon: <FolderOpenDot />,
            awards: "Best Designer of the Year",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla.",
            contributors:"Kwame Appiah",
            status:"in-progress",
            download:"link",
            date: 2008
         },
   ],


   EXPERIENCE:
   [
      {
        icon:<ScrollText/>,
        name: "Google",
        role: "Software Engineer",
        skills:"Python",
        responsibility:"Create an app for kids",
        location:"New York",
        date:"2012-present "
      },
      {
        icon:<ScrollText/>,
        name: "Samsung",
        role: "Software Engineer",
        skills:"Python",
        responsibility:"Design new software to run",
        location:"Chiba",
        date:"2012-present ",
      },
      {
        icon:<ScrollText/>,
        name: "Microsoft",
        role: "Data Analyst",
        skills:"Python",
        responsibility:"Statics for the year",
        location:"New York",
        date:"2012-present",
      }, 
   ],
};

export default K;