import { FolderOpenDot, GraduationCap, Home, Linkedin, NotebookPen, ScanEye, ScrollText, Trophy, University, UserRound } from "lucide-react";



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
         name:"Kwame Nkrumah University of Science And Technology",
         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla.",
         date:1999-2002
      },
      {
         name:"Kwame Nkrumah University of Science And Technology",
         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla.",
         date:2012-2016
      },
      {
         name:"Harvard University",
         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla.",
         date:2002-2004
      },
      {
         name: "University of Ghana",
         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla.",
         date:2025-2029
      },
      {
         name:"Kwame Nkrumah University of Science And Technology",
         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla.",
         date:2012-2016
      },
   ],
   PROJECTS:
   [
      {
               icon:<FolderOpenDot/>,
               awards: "Best Designer of the Year",
               description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla.",
      },
   ]
};

export default K;