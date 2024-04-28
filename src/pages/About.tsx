import Heading from "../components/Heading";
import Line from "../components/Line";
import { workDetails, educationDetails } from "../constants/AboutDetails";
import DataBox from "../components/DataBox";

export const About = () => {
  return (
    <>
      <main id="about" className="py-10">
        <Heading text="About me" />
        <section className="mx-64 sm:mx-6 pt-10">
          <p className="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
            eaque, alias reiciendis maxime eum laborum nam ipsa rerum vel,
            explicabo numquam excepturi tempora est placeat repellat
            exercitationem esse laudantium voluptatibus.
          </p>
        </section>
        <section className="mx-64 sm:mx-6 pt-10">
          <Heading text="Work Experience : " isSubHeading={true} />
          {workDetails.map((item) => (
            <DataBox
              position={item.position}
              type={item.type}
              company={item.company}
              duration={item.duration}
              location={item.location}
            />
          ))}
        </section>
        <section className="mx-64 sm:mx-6 pt-10">
          <Heading text="Education : " isSubHeading={true} />
          {educationDetails.map((item) => (
            <DataBox
              position={item.position}
              // type={item.type}
              company={item.company}
              duration={item.duration}
              grade={item.grade}
              location={item.location}
            />
          ))}
        </section>
      </main>
      <Line />
    </>
  );
};
