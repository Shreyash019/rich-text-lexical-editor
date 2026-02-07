"use client";
import React, { useState } from "react";
import { Typography, ComingSoon } from "@/libs";
import { FaLightbulb } from "react-icons/fa";

interface CardContainerProps {
  title: string;
  description: string;
  available: boolean;
}

const CardContainer: React.FC<CardContainerProps> = ({
  title,
  description,
  available = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    if (available) {
      setClicked(true);
    }
  };
  const handleMouseLeave = () => {
    setClicked(false);
  };
  return (
    <div
      className={`flex-grow min-w-[250px] max-w-[350px] flex-1 basis-[300px] relative transition-transform transform ease-in-out ${!available ? "cursor-not-allowed" : "cursor-pointer"} ${clicked ? "scale-98" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={handleClick}
      onMouseUp={handleMouseLeave}
    >
      <div className="p-4 h-full h-auto border rounded-lg shadow-sm group border-cyan-500/20 hover:border-yellow-200/90 transition-colors space-y-4">
        <div className="min-h-16 h-auto relative">
          <Typography
            variant="h4"
            className="font-bold w-4/5 text-white group-hover:text-yellow-200/90 transition-colors"
          >
            {title}
          </Typography>
          <FaLightbulb className="absolute -top-2 -right-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cyan-500/50 group-hover:text-yellow-500 group-hover:scale-105 transition-colors" />
        </div>
        <Typography
          variant="caption"
          className="text-gray-400 group-hover:text-gray-300 transition-colors"
        >
          {description}
        </Typography>
        {!available && hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-lg z-10">
            <ComingSoon />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
