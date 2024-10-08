import Heading from "../components/Heading";
import Line from "../components/Line";
import { workDetails, educationDetails } from "../constants/AboutDetails";
import DataBox from "../components/DataBox";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animation";

export const About = () => {
  useGSAP(() => {
    animateWithGsap(".a_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
      stagger: 0.5,
    });
    animateWithGsap(".a_ex_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
      stagger: 0.5,
    });
    animateWithGsap(".a_ed_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
      stagger: 0.5,
    });
  }, []);
  return (
    <>
      <main id="about" className="py-10">
        <Heading text="About me" animationClass="a_text" />
        <section className="mx-64 sm:mx-6 pt-10">
          <p className="text-start text-lg">
            <p className="a_text">
              Vrushabh Gawas is a final year BSC IT student, passionate Web
              Developer and Tech Enthusiast, his career objective is to work for
              a detail oriented organization that believes in setting standards
              through continuous innovations in the field of technological
              excellence and to prove himself as an valuable asset.
            </p>
            <p className="py-4 a_text">
              Self taught developer, Proficient in Java, Data Structures and
              Algorithms and Web Development.
            </p>
            <p className="py-2 a_text">
              Currently, Vrushabh is seeking opportunities in roles such as
              Software Engineer, Web Developer or Java Developer, where he can
              continue to contribute his expertise and passion for technology.
            </p>
          </p>
        </section>
        <section className="mx-64 sm:mx-6 pt-10">
          <Heading
            text="Work Experience : "
            isSubHeading={true}
            animationClass="a_ex_text"
          />
          {workDetails.map((item) => (
            <DataBox
              // position={item.position}
              // type={item.type}
              // company={item.company}
              // duration={item.duration}
              // location={item.location}
              animationClass="a_ex_text"
              {...item}
            />
          ))}
        </section>
        <section className="mx-64 sm:mx-6 pt-10">
          <Heading
            text="Education : "
            isSubHeading={true}
            animationClass="a_ed_text"
          />
          {educationDetails.map((item) => (
            <DataBox
              // position={item.position}
              // company={item.company}
              // duration={item.duration}
              // grade={item.grade}
              // location={item.location}
              animationClass="a_ed_text"
              {...item}
            />
          ))}
        </section>
      </main>
      <Line />
    </>
  );
};
