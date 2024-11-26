import { useGSAP } from "@gsap/react";
import Heading from "../components/Heading";
import { animateWithGsap } from "../utils/animation";
import { arrowSVG } from "../constants/ProjectDetails";
import { EventTemplate } from "../components/EventTemplate";
import { EventsDetails } from "../constants/EventsDetails";
import Line from "../components/Line";
import { useEffect, useState } from "react";
const back = arrowSVG.back;
const next = arrowSVG.next;

export const Events = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useGSAP(() => {
    animateWithGsap(".e_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  function goRight() {
    let slide: any = document.getElementById("eventSlider");
    slide.scrollLeft += 250;
  }

  function goLeft() {
    let slide: any = document.getElementById("eventSlider");
    slide.scrollLeft -= 250;
  }

  const handleOpen = (image: any) => {
    setSelectedImage(image);
    setIsImageOpen(true);
  };

  const handleClose = () => {
    setSelectedImage("");
    setIsImageOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape" && isImageOpen) {
        handleClose();
      }
    };

    if (isImageOpen) {
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", handleClose);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handleClose);
    };
  }, [isImageOpen]);

  return (
    <>
      <main id="events" className="pt-10 pb-20">
        <Heading text="Events" animationClass="e_text" />
        <section className="flex items-center justify-center">
          <div onClick={goLeft}>{back}</div>
          <div
            id="eventSlider"
            className="overflow-x-scroll scroll-smooth mx-40 flex py-4 gap-x-3 border-black border-2 dark:border-gray-400 border-x-0 sm:mx-6"
          >
            {EventsDetails.map((item) => (
              <EventTemplate
                img={item.img}
                name={item.name}
                onClick={() => handleOpen(item.img)}
              />
            ))}
          </div>
          <div onClick={goRight}>{next}</div>
          {/* Image PopUp */}
          {isImageOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-opacity-90 flex justify-center items-center z-50 bg-gray-900 ease-in duration-500">
              <div className="">
                <span
                  onClick={() => handleClose()}
                  className="absolute top-10 right-10 sm:top-[25%] text-white text-5xl md:text-6xl cursor-pointer hover:transform hover:scale-125"
                >
                  &times;
                </span>
                <img
                  src={selectedImage}
                  alt="Large View"
                  className="max-w-[80vw] max-h-[80vh] border-2 border-gray-200 rounded-xl"
                />
              </div>
            </div>
          )}
        </section>
      </main>
      <Line />
    </>
  );
};
