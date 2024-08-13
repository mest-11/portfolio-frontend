import { Circle, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const SubNavBar = ({ firstName, lastName, userName }) => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between p-8 items-center">
      <span className="text-[25px] flex items-center">
        <Link to={`/preview/${userName}`} className="flex items-center">
          <Circle className="fill-blue-400 text-portBlue mr-2" />
          {`${firstName} ${lastName}`}
        </Link>
      </span>
      <div className="flex gap-x-[1rem] text-[20px] mt-4 sm:mt-0">
        <Link to={`/preview/${userName}/resume`}>Resume</Link>
        <span>|</span>
        <Link to={`/preview/${userName}/projects`}>Projects</Link>
        <span>|</span>
        <Link to={`/preview/${userName}/contact`}>Contact</Link>
        <span>|</span>
        <a href="/signup">
          <UserRound className="inline" />
        </a>
      </div>
    </nav>
  );
};

export default SubNavBar;
