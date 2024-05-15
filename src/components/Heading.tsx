import React from "react";

interface myProps {
  text: String;
  isSubHeading?: Boolean;
  className?: String;
}

const Heading: React.FC<myProps> = (props) => {
  const { text, isSubHeading, className } = props;
  return (
    <div
      className={`${
        isSubHeading ? "text-3xl" : "text-4xl text-center font-semibold"
      } py-6 ${className}`}
    >
      {text}
    </div>
  );
};

export default Heading;
