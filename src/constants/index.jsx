import {FolderOpenDot, Home, Linkedin, NotebookPen, ScrollText, Trophy, UserRound } from "lucide-react";



const K = {
   
      NAVLINKS: [
         {
            icon:<Home/> ,
            text: "Home",
            link: "/dashboard"
         },
         {
            icon:<UserRound/>,
            text: "Bio",
            link: "/dashboard/Bio"
         },
         {
            icon: <Trophy/>,
            text: "Achievements",
            link: "/dashboard/achievements"
         },
         {
            icon:<ScrollText/>,
            text: "Experience",
            link:"/dashboard/experience",
       },
       {
         icon:<FolderOpenDot/>,
         text:"Projects",
         link:"/dashboard/projects",
       },
       {
         icon:<NotebookPen/>,
         text:"Skills",
         link:"/dashboard/skills"
       },
      {
         icon:<Linkedin/>,
         text:"Social",
         link:"/dashboard/social"
      },
      ],
};

export default K;