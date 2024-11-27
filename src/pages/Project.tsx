import { useGSAP } from "@gsap/react";
import Heading from "../components/Heading";
import Line from "../components/Line";
import Template from "../components/ProjectTemplate";
import { Details, arrowSVG } from "../constants/ProjectDetails";
import { animateWithGsap } from "../utils/animation";
const back = arrowSVG.back;
const next = arrowSVG.next;

export const Project = () => {
  useGSAP(() => {
    animateWithGsap(".p_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  function handleScroll(e: any) {
    let slide: any = document.getElementById("slider");
    slide.style.scrollBehavior = "smooth";
    slide.scrollLeft += e.deltaY;
  }

  const enableScroll = (e: any) => {
    document.removeEventListener("wheel", preventDefault, false);
  };

  const disableScroll = (e: any) => {
    document.addEventListener("wheel", preventDefault, {
      passive: false,
    });
  };

  const preventDefault = (e: any) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  };

  function goRight() {
    let slide: any = document.getElementById("slider");
    slide.scrollLeft += 250;
  }

  function goLeft() {
    let slide: any = document.getElementById("slider");
    slide.scrollLeft -= 250;
  }

  return (
    <>
      <main id="projects" className="py-10 pb-20">
        <Heading text="Projects" animationClass="p_text" />
        <div className="flex items-center justify-center">
          <div onClick={goLeft}>{back}</div>
          <div
            onWheel={handleScroll}
            onMouseEnter={disableScroll}
            onMouseLeave={enableScroll}
            id="slider"
            className="overflow-x-scroll scroll-smooth mx-40 flex py-4 gap-x-3 border-black border-2 dark:border-gray-400 border-x-0 md:mx-10 sm:mx-6"
          >
            {Details.map((item) => (
              <Template
                img={item.img}
                name={item.name}
                bio={item.bio}
                stack={item.stack}
                webLink={item.webLink}
                codeLink={item.codeLink}
                projectDate={item.projectDate}
              />
            ))}
          </div>
          <div onClick={goRight}>{next}</div>
        </div>
      </main>
      <Line />
    </>
  );
};
