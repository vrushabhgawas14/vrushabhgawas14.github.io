import Heading from "../components/Heading";
import Line from "../components/Line";
import Template from "../components/ProjectTemplate";
import { Details } from "../constants/ProjectDetails";
import { back, next } from "../assets";

export const Project = () => {
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
        <Heading text="Projects" />
        <div className="flex items-center">
          <img
            src={back}
            alt="Back"
            className="ml-10 w-12 h-18 cursor-pointer opacity-80 hover:opacity-100 sm:hidden"
            onClick={goLeft}
          />
          <div
            onWheel={handleScroll}
            onMouseEnter={disableScroll}
            onMouseLeave={enableScroll}
            id="slider"
            className="overflow-x-scroll scroll-smooth mx-40 flex py-4 gap-x-3 border-black border-2 dark:border-gray-400 border-x-0 sm:mx-6"
          >
            {Details.map((item) => (
              <Template
                img={item.img}
                name={item.name}
                bio={item.bio}
                stack={item.stack}
                webLink={item.webLink}
                codeLink={item.codeLink}
              />
            ))}
          </div>
          <img
            src={next}
            alt=""
            className="mr-10 w-12 h-18 cursor-pointer opacity-80 hover:opacity-100 sm:hidden"
            onClick={goRight}
          />
        </div>
      </main>
      <Line />
    </>
  );
};
