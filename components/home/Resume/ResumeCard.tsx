import React from "react";
import { IconType } from "react-icons/lib";

type Props = {
  Icon: IconType;
  role: string;
  desc : string;
  date?: string;
};

const ResumeCard = ({ Icon, role, desc, date }: Props) => {
  return (
    <div className="mb-6">
      <div className="flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md">

        {/*---- icon ----*/}
        <div className="flex sm:h-14 sm:w-14 h-10 w-10 bg-blue-950 rounded-full items-center justify-center shrink-0">
          <Icon className="sm:h-8 sm:w-8 h-6 w-6 text-white" />
        </div>

        {/*---- content ----*/}
        <div className="flex-1">
          {date && (
            <span className="inline-block mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 text-gray-600 font-bold sm:text-lg text-sm">
              {date}
            </span>
          )}

          <h2 className="text-xl md:text-2xl font-semibold text-gray-200">
            {role}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base pt-3">
            {desc}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ResumeCard;