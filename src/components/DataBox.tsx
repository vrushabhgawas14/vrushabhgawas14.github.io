import React from "react";

interface myProps {
  position: String;
  type?: String;
  company: String;
  duration: String;
  grade?: String;
  location: String;
  animationClass?: String;
}

export const DataBox: React.FC<myProps> = (props) => {
  const { position, type, company, duration, grade, location, animationClass } =
    props;
  return (
    <div
      className={`flex flex-col gap-y-1 rounded-lg border border-zinc-500 p-2 mb-4 ${animationClass}`}
    >
      <div className="flex justify-between">
        <span className="text-xl font-semibold">{position}</span>
        <span
          className={`px-2 my-1 rounded-xl text-slate-800 dark:text-zinc-900 
          ${type ? "bg-zinc-400 dark:bg-slate-400" : null}`}
        >
          {type}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">{company}</span>
        <span className="text-sm">{duration}</span>
      </div>
      <div className={`flex ${grade ? "justify-between" : "justify-end"}`}>
        <div className={`${grade ? null : "hidden"} italic`}>
          Grade : {grade}
        </div>
        <div className="italic text-sm">{location}</div>
      </div>
    </div>
  );
};

export default DataBox;
