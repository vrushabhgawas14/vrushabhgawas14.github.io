import { useGSAP } from "@gsap/react";
import Heading from "../components/Heading";
import Line from "../components/Line";
import { TechStackData } from "../constants/SkillsDetails";
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
        <section className="mx-64 md:mx-28 sm:mx-6 pt-10">
          {TechStackData.map((item, index1) => (
            <div key={index1}>
              <Heading text={item.catogory} isSubHeading={true} />
              <div className="flex flex-wrap py-4 gap-10 sm:gap-6">
                {item.content.map((element, index2) => (
                  <motion.img
                    key={index2}
                    variants={iconVariants}
                    custom={element.motionDuration}
                    initial="initial"
                    animate="animate"
                    src={element.img}
                    alt={`${item.catogory}-${index2 + 1}`}
                    title={element.title}
                    className={`${item.svgWidth} h-20 sm:h-16`}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
      <Line />
    </>
  );
};
