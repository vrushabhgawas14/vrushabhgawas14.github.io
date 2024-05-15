import React from "react";
import Heading from "../components/Heading";
import { socials } from "../constants/HeaderDetails";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animation";

export const Contact = () => {
  useGSAP(() => {
    animateWithGsap(".c_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9f6e8ca7-169a-4b82-9b65-bacd2192801d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <main id="contact" className="py-10">
        <Heading text="Contact" animationClass="c_text" />
        <section className="mx-64 sm:mx-6 pt-10">
          <div>
            <form
              onSubmit={onSubmit}
              className="flex flex-col items-center gap-y-4 font-bold"
            >
              <input
                type="text"
                name="name"
                className="w-[40%] sm:w-[85%] px-4 py-2 rounded-3xl  focus:outline-none bg-slate-800 dark:bg-gray-200 text-zinc-200 dark:text-slate-800"
                placeholder="Enter Name : "
                required
              />
              <input
                type="email"
                name="email"
                className="w-[40%] sm:w-[85%] px-4 py-2 rounded-3xl focus:outline-none bg-slate-800 dark:bg-gray-200 text-zinc-200 dark:text-slate-800"
                placeholder="Enter Email : "
                required
              />
              <textarea
                name="message"
                rows={4}
                className="w-[40%] sm:w-[85%] px-4 py-2 rounded-xl  focus:outline-none bg-slate-800 dark:bg-gray-200 text-zinc-200 dark:text-slate-800"
                placeholder="Enter Message : "
                required
              ></textarea>

              <button type="submit" className="btn">
                Submit
              </button>
            </form>
            <p className={`text-center p-2 text-green-600`}>{result}</p>
          </div>
          <div className="flex flex-col items-center pt-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gawasvrushabh@gmail.com"
              target="blank"
            >
              gawasvrushabh@gmail.com
            </a>
            <div className="flex pt-2 sm:pl-3">
              {socials.map((item) => (
                <a href={item.url} target="_blank" className="px-2">
                  {item.svg}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
