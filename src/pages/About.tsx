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
          <p className="text-start text-lg">
            <p>
              Vrushabh Gawas is a second year BSC IT student and passionate Open
              Source Contributor and DevOps Enthusiast, his career objective is
              to work for a detail oriented organization that believes in
              setting standards through continuous innovations in the field of
              technological excellence and to prove himself as an valuable
              asset.
            </p>
            <p className="py-4">
              Self taught developer, Proficient in Java, Data Structures and
              Algorithms and Web Development.
            </p>
            <p className="py-2">
              Currently, Vrushabh is seeking opportunities in roles such as
              Software Engineer, Web Developer or DevOps Engineer, where he can
              continue to contribute his expertise and passion for technology.
            </p>
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
