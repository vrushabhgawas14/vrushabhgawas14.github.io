import Heading from "../components/Heading";
import Line from "../components/Line";
import Template from "../components/ProjectTemplate";

export const Project = () => {
  return (
    <>
      <main id="projects" className="py-10">
        <Heading text="Projects" />
        <section className="mx-64 sm:mx-6 pt-10">
          <Template />
        </section>
      </main>
      <Line />
    </>
  );
};
