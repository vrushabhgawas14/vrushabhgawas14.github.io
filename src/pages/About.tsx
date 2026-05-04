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
      <main
        id="about"
        className="py-10"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #463740 0%, #000000 100%)",
        }}
      >
        <Heading text="About me" animationClass="a_text" />
        <section className="mx-64 md:mx-28 sm:mx-6 pt-10">
          <div className="text-start text-lg">
            <p className="a_text">
              I am Vrushabh Gawas, a Full Stack Developer based in Mumbai with a
              simple mission: to help businesses and startups reach more
              customers and simplify their operations by building fast, modern
              web and mobile applications.
            </p>
            <p className="py-4 a_text">
              Currently, I work as a Software Developer at a firm where I build
              secure, high stakes banking applications. This experience has
              taught me that a website isn't just about looking good, it must be
              fast, reliable, and, most importantly secure.
            </p>
            <p className="py-4 a_text">
              My journey is driven by results. From our first conversation to
              the final launch, I ensure your digital presence is built with the
              latest technology and a security first mindset.
            </p>
            {/* <p className="py-4 a_text">
              My journey is driven by results. I've won multiple hackathons for
              building platforms that tackle social and environmental issues,
              and I've seen my work go viral on launch day, handling hundreds of
              users without a hitch.
            </p> */}
            {/* <p className="py-2 a_text">
              I don't just write code, I partner with you to understand your
              business goals. From our first conversation to the final launch, I
              ensure your digital presence is built with the latest technology
              and a security first mindset.
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
          <div className="md:flex lg:flex gap-x-4 justify-between">
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
          </div>
        </section>
      </main>
      <Line />
    </>
  );
};
