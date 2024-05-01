import Heading from "../components/Heading";
import Line from "../components/Line";
import { techStackDetails, toolsDetails } from "../constants/SkillsDetails";

export const Skills = () => {
  return (
    <>
      <main id="skills" className="py-10">
        <Heading text="Skills" />
        <section className="mx-64 sm:mx-6 pt-10">
          <div>
            <Heading text="Tech Stack" isSubHeading={true} />
            <p>Technologies I had Worked On</p>
            <div className="flex flex-wrap py-4 gap-10 sm:gap-6">
              {techStackDetails.map((item) => (
                <img
                  src={item.img}
                  alt="Image"
                  title={item.title}
                  className="w-24 h-24"
                />
              ))}
            </div>
          </div>
          <div>
            <Heading text="Tools" isSubHeading={true} />
            <div className="flex flex-wrap py-4 gap-10 sm:gap-6">
              {toolsDetails.map((item) => (
                <img
                  src={item.img}
                  alt="Image"
                  title={item.title}
                  className="w-24 h-24"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Line />
    </>
  );
};
