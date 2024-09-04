import { Mail, Phone } from "lucide-react";
import Git from "./git";
import LinkedIn from "./linkedIn";
import DownloadRsesume from "./downloadRsesume";

const SubFooter = ({ user }) => {
  return (
    <div className="bg-slate-100 py-10">
      <div className="bg-slate-300 h-[0.5px] w-full shadow-lg shadow-slate-350 mb-10"></div>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 px-6 lg:px-20 justify-center items-center">
        {/* Contact Information */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-2">
            <Phone />
            <span className="font-semibold">{user?.userProfile?.contact}</span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Mail />
            <a href={`mailto:${user?.email}`} className="hover:underline font-semibold">{user?.email}</a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center items-center">
          <a
            href={user?.userProfile?.gitHubLink ? `https://${user?.userProfile?.gitHubLink.replace(/^https?:\/\//, '')}` : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Git />
          </a>
          <a
            href={user?.userProfile?.linkedInLink ? `https://${user?.userProfile?.linkedInLink.replace(/^https?:\/\//, '')}` : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <LinkedIn />
          </a>
        </div>

        {/* Resume Download */}
        <a
          href={`https://savefiles.org/${user?.userProfile?.resume}?shareable_link=307`}
          download
          className="mt-4 lg:mt-0 hover:scale-105 transition-transform"
        >
          <DownloadRsesume />
        </a>

        {/* Rights Reserved */}
        <div className="pt-8 w-full text-center lg:w-auto lg:text-left">
          <span>All rights reserved to @ Monica, Donatus, Caroline & Kezia</span>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
