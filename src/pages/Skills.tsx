import { useGSAP } from "@gsap/react";
import Heading from "../components/Heading";
import Line from "../components/Line";
import {
  languages,
  frameworkLibrary,
  database,
  backend,
  tools,
} from "../constants/SkillsDetails";
import { animateWithGsap } from "../utils/animation";
import { motion, Variants } from "framer-motion";

export const Skills = () => {
  useGSAP(() => {
    animateWithGsap(".s_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  const iconVariants: Variants = {
    initial: { y: -10 },
    animate: (duration: any) => ({
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    }),
  };

  return (
    <>
      <main id="skills" className="py-10">
        <Heading text="Tech Stack" animationClass="s_text" />
        <section className="mx-64 sm:mx-6 pt-10">
          <div>
            <Heading text="Languages" isSubHeading={true} />
            <div className="flex flex-wrap py-4 gap-10 sm:gap-6">
              {languages.map((item) => (
                <motion.img
                  variants={iconVariants}
                  custom={item.motionDuration}
                  initial="initial"
                  animate="animate"
                  src={item.img}
                  alt="techStackImages"
                  title={item.title}
                  className="w-24 h-24"
                />
              ))}
            </div>
          </div>
          <div>
            <Heading text="Frameworks / Libraries" isSubHeading={true} />
            <div className="flex flex-wrap py-4 gap-10 sm:gap-6">
              {frameworkLibrary.map((item) => (
                <motion.img
                  variants={iconVariants}
                  custom={item.motionDuration}
                  initial="initial"
                  animate="animate"
                  src={item.img}
                  alt="techStackImages"
                  title={item.title}
                  className="w-24 h-24"
                />
              ))}
            </div>
          </div>
          <div>
            <Heading text="Database" isSubHeading={true} />
            <div className="flex flex-wrap py-4 gap-10 sm:gap-6">
              {database.map((item) => (
                <motion.img
                  variants={iconVariants}
                  custom={item.motionDuration}
                  initial="initial"
                  animate="animate"
                  src={item.img}
                  alt="techStackImages"
                  title={item.title}
                  className="w-32 h-24"
                />
              ))}
            </div>
          </div>
          <div>
            <Heading text="Backend" isSubHeading={true} />
            <div className="flex flex-wrap py-4 gap-10 sm:gap-6">
              {backend.map((item) => (
                <motion.img
                  variants={iconVariants}
                  custom={item.motionDuration}
                  initial="initial"
                  animate="animate"
                  src={item.img}
                  alt="techStackImages"
                  title={item.title}
                  className="w-28 h-24"
                />
              ))}
            </div>
          </div>
          <div>
            <Heading text="Tools" isSubHeading={true} />
            <div className="flex flex-wrap py-4 gap-10 sm:gap-6">
              {tools.map((item) => (
                <motion.img
                  variants={iconVariants}
                  custom={item.motionDuration}
                  initial="initial"
                  animate="animate"
                  src={item.img}
                  alt="socialImages"
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
