import React, { useState } from "react";
import { svgs } from "../constants/AboutDetails";

interface myProps {
  position: String;
  type?: String;
  company: String;
  duration: String;
  grade?: String;
  location: String;
  animationClass?: String;
  description?: String;
}

export const DataBox: React.FC<myProps> = (props) => {
  const {
    position,
    type,
    company,
    duration,
    grade,
    location,
    animationClass,
    description,
  } = props;

  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const downward = svgs.downward;
  const upward = svgs.upward;

  return (
    <div
      className={`flex flex-col gap-y-1 rounded-lg border border-zinc-500 p-2 mb-4 ${animationClass}`}
    >
      <div className="flex justify-between">
        <span className="text-xl font-semibold">{position}</span>
        <span
          className={`px-2 my-1 rounded-xl text-slate-200 dark:text-zinc-900 
          ${type ? "bg-slate-700 dark:bg-slate-400" : null}`}
        >
          {type}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">{company}</span>
        <span className="text-sm">{duration}</span>
      </div>
      <div
        className={`flex italic ${grade ? "justify-between" : "justify-end"}`}
      >
        {grade && <div>Grade : {grade}</div>}
        <div className="italic text-sm">{location}</div>
      </div>
      {description && (
        <div>
          {descriptionOpen && (
            <div className="pt-2 pb-4 px-5 text-justify">{description}</div>
          )}
          <div className="text-sm underline flex items-center justify-center space-x-2">
            <span
              className="cursor-pointer"
              onClick={() => setDescriptionOpen(!descriptionOpen)}
            >
              Read {descriptionOpen ? `Less` : "More"}
            </span>
            <span>{descriptionOpen ? upward : downward}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataBox;
