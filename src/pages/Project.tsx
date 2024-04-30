import Heading from "../components/Heading";
import Line from "../components/Line";
import Template from "../components/ProjectTemplate";
import { Details } from "../constants/ProjectDetails";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
export const Project = () => {
  let slide: any = document.getElementById("slider");
  slide?.addEventListener("wheel", (e: any) => {
    e.preventDefault();
    slide.style.scrollBehavior = "auto";
    slide.scrollLeft += e.deltaY;
  });

  return (
    <>
      <main id="projects" className="py-10 w-[60%] sm:w-[90%] m-auto">
        <Heading text="Projects" />
        <div id="slider" className="overflow-scroll sm:mx-6 scrolling-section">
          <div className="flex py-5">
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
        </div>
      </main>
      <Line />
    </>
  );
};
