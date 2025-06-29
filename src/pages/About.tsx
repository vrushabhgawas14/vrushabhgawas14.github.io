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
        <section className="mx-64 md:mx-28 sm:mx-6 pt-10">
          <div className="text-start text-lg">
            <p className="a_text">
              I am Vrushabh Gawas, a Software Developer and tech enthusiast.
              {/* <span>
                His career objective is to work for a detail oriented
                organization that believes in building impactful solutions and
                aims to push the boundaries of innovation and technology.
              </span> */}
            </p>
            <p className="py-4 a_text">
              I have strong foundation in MERN stack, along with experience in
              frameworks like Next.js and databases like MySQL and Firebase.
              Additionally, I'm proficient in version control tools such as Git
              and containerization tools such as Docker. My involvement in tech
              communities and personal projects has further honed my abilities
              and also I have won 2 intercollegiate hackathons.
            </p>
            {/* <p className="py-2 a_text">
              Currently, Vrushabh is seeking opportunities in Software Developer
              role, where he can continue to contribute his expertise and
              passion for technology.
            </p> */}
          </div>
        </section>
        <section className="mx-64 md:mx-28 sm:mx-6 pt-10">
          <Heading
            text="Work Experience : "
            isSubHeading={true}
            animationClass="a_ex_text"
          />
          {workDetails.map((item, index) => (
            <DataBox
              key={index}
              // position={item.position}
              // type={item.type}
              // company={item.company}
              // duration={item.duration}
              // location={item.location}
              // description={item.description}
              animationClass="a_ex_text"
              {...item}
            />
          ))}
        </section>
        <section className="mx-64 md:mx-28 sm:mx-6 pt-10">
          <Heading
            text="Education : "
            isSubHeading={true}
            animationClass="a_ed_text"
          />
          {educationDetails.map((item, index) => (
            <DataBox
              key={index}
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
