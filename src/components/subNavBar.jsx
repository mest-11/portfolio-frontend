import { Circle, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const SubNavBar = ({ firstName, lastName, userName }) => {
  return (
    <nav className="flex justify-between p-8">
      <span className="text-[25px] ">
        <Link to={`/preview/${userName}`}>
          <Circle className="fill-blue-400 text-portBlue" />
          {`${firstName} ${lastName}`}{" "}
        </Link>
      </span>
      <div className="flex gap-x-[1rem] text-[20px]">
        <Link to={`/preview/${userName}/resume`}>Resume</Link>{" "}
        <span className="">|</span>
        <span>
          <Link to={`/preview/${userName}/projects`}>Projects</Link>{" "}
          <span className="">|</span>
        </span>
        <span>
          <Link to={`/preview/${userName}/contact`}>Contact</Link>{" "}
          <span className="">|</span>
        </span>
        <span>
          <a href="/signup">
            <UserRound />{" "}
          </a>
        </span>
      </div>
    </nav>
  );
};

export default SubNavBar;
