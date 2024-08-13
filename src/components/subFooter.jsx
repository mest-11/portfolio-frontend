import { Mail, Phone } from "lucide-react";
import Git from "./git";
import LinkedIn from "./linkedIn";
import DownloadRsesume from "./downloadRsesume";

const SubFooter = ({ user }) => {
  return (
    <div>
      <div className="bg-slate-300 h-[0.5px] w-full shadow-lg shadow-slate-350"></div>
      <div className="flex flex-col lg:flex-row gap-10 py-10 px-6 lg:px-20 justify-center items-center">
        <div className="flex flex-col items-center lg:items-start w-[300px]">
          <span>
            <Phone />
          </span>
          <span>{user?.userProfile?.contact}</span>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <span>
            <Mail />
          </span>
          <a href={`mailto:${user?.email}`}>{user?.email}</a>
        </div>
        <div className="flex gap-6 justify-center items-center">
          <a
            href={user?.userProfile?.gitHubLink ? `https://${user?.userProfile?.gitHubLink.replace(/^https?:\/\//, '')}` : '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Git />
          </a>
          <a
            href={user?.userProfile?.linkedInLink ? `https://${user?.userProfile?.linkedInLink.replace(/^https?:\/\//, '')}` : '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        </div>

        <a
          href={`https://savefiles.org/${user?.userProfile?.resume}?shareable_link=307`}
          download
          className="mt-4 lg:mt-0"
        >
          <DownloadRsesume />
        </a>

        <div className="pt-8 w-full text-center lg:w-[600px]">
          <span>
            All rights reserved to @ Monica, Donatus, Caroline & Kezia
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
