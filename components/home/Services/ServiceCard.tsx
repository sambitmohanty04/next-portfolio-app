import React from 'react'
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  name: string;
  description: string;
};

const ServiceCard = ({ icon: Icon, name, description }: Props) => {
  return (
    <div className="bg-white/5 p-6 rounded-xl border-t-4 border-blue-500 
                    hover:bg-white/10 transition duration-300 
                    shadow-lg hover:shadow-xl group">
      
      {/* Icon */}
      <div className="flex items-center justify-between">
        <Icon className="text-4xl text-gray-300 group-hover:text-blue-400 transition" />
        
        {/* Arrow icon (optional) */}
        <span className="text-gray-400 group-hover:text-blue-400 transition">
          ↗
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-6 text-xl font-semibold text-white">
        {name}
      </h2>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;