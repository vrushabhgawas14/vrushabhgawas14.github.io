import React from "react";

interface myProps {
  text: String;
  isSubHeading?: Boolean;
  animationClass?: String;
}

const Heading: React.FC<myProps> = (props) => {
  const { text, isSubHeading, animationClass } = props;
  return (
    <div
      className={`${
        isSubHeading ? "text-3xl" : "text-4xl text-center font-semibold"
      } py-6 ${animationClass}`}
    >
      {text}
    </div>
  );
};

export default Heading;
