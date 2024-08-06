import { Mail, Phone } from "lucide-react";
import Git from "./git";
import LinkedIn from "./linkedIn";
import DownloadRsesume from "./downloadRsesume";

const SubFooter = ({ user }) => {
  return (
    <div>
      <div className="bg-slate-300 h-[0.5px] w-full shadow-lg shadow-slate-350 "></div>
      <div className="flex gap-x-20 py-10 px-20 justify-center items-center">
        <div className="flex flex-col w-[300px]">
          <span>
            <Phone />
          </span>
          <span>{user?.userProfile?.contact}</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>
            {" "}
            <Mail />{" "}
          </span>
          <a href={`https://${user?.email}`}>{user?.email}</a>
        </div>
        <div className="flex gap-x-6 justify-center items-center">
          <a
            href={`https://${user?.userProfile?.gitHubLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Git />
          </a>
          <a
            href={`https://${user?.userProfile?.linkedInLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        </div>

        <a
          href={`https://savefiles.org/${user?.userProfile?.resume}?shareable_link=307`}
          download
        >
          <DownloadRsesume />
        </a>

        <div className="pt-8 w-[600px]">
          <span>
            All rights reserved to @ Monica, Donatus, Caroline & Kezia
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
