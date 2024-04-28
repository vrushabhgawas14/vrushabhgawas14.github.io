import Heading from "../components/Heading";
import Line from "../components/Line";
import Template from "../components/ProjectTemplate";
import { Details } from "../constants/ProjectDetails";

export const Project = () => {
  return (
    <>
      <main id="projects" className="py-10">
        <Heading text="Projects" />
        <section className="flex mx-64 sm:mx-6 pt-10 overflow-scroll">
          {Details.map((item) => (
            <Template
              img={item.img}
              name={item.name}
              bio={item.bio}
              stack={item.stack}
              webLink={item.webLink}
              codeLink={item.codeLink}
            />
          ))}
        </section>
      </main>
      <Line />
    </>
  );
};
