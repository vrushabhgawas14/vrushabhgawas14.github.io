import Heading from "../components/Heading";
import Line from "../components/Line";

export const Skills = () => {
  return (
    <>
      <main id="skills" className="py-10">
        <Heading text="Skills" />
        <section className="mx-64 sm:mx-6 pt-10">
          <div>
            <Heading text="Tech Stack" isSubHeading={true} />
            <p>Technologies I had Worked On</p>
            <div>Images</div>
          </div>
          <div>
            <Heading text="Tools" isSubHeading={true} />
          </div>
        </section>
      </main>
      <Line />
    </>
  );
};
