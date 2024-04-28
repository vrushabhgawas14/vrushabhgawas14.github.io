import React from "react";

interface myProps {
  position: String;
  type?: String;
  company: String;
  duration: String;
  grade?: String;
  location: String;
}

export const DataBox: React.FC<myProps> = (props) => {
  const { position, type, company, duration, grade, location } = props;
  return (
    <div className="flex flex-col gap-y-1 rounded-lg border border-zinc-500 p-2 mb-4">
      <div className="flex justify-between">
        <span className="text-xl font-semibold">{position}</span>
        <span
          className={`px-2 my-1 rounded-xl text-slate-800 dark:text-zinc-900 
                      ${type ? "bg-zinc-400 dark:bg-slate-500" : null}`}
        >
          {type}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="italic">{company}</span>
        <span className="text-sm">{duration}</span>
      </div>
      <div className="italic text-sm">{location}</div>
      <div className={`${grade ? null : "hidden"}`}>Grade : {grade}</div>
    </div>
  );
};

export default DataBox;
