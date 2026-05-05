import React from "react";
import Heading from "../components/Heading";
import { socials } from "../constants/HeaderDetails";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animation";
import Line from "../components/Line";

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

  const onFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    gsap.to(e.target, {
      borderColor: "rgba(255, 255, 255, 0.6)",
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.14)",
      duration: 0.3,
    });
  };

  const onBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    gsap.to(e.target, {
      borderColor: "rgba(255, 255, 255, 0.2)",
      boxShadow: "0 0 0px rgba(255, 255, 255, 0)",
      duration: 0.3,
    });
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    const accessKey = process.env.REACT_APP_ACCESS_KEY;
    formData.append("access_key", accessKey || "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully.");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <>
      <main
        id="contact"
        className="pt-10"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #463740 0%, #000000 100%)",
        }}
      >
        <Heading text="Get In Touch" animationClass="c_text" />
        <section className="mx-64 md:mx-28 sm:mx-6 pt-10 flex flex-col">
          <div className="text-center mx-32 md:mx-28 sm:mx-4 pb-10 text-lg sm:text-base opacity-75">
            I&apos;m currently accepting new freelance projects and
            collaborations in Mumbai and beyond. Whether you have a technical
            query or a business goal, reach out below and I&apos;ll get back to
            you shortly.
          </div>
          <div>
            <form
              onSubmit={onSubmit}
              className="flex flex-col items-center gap-y-4 font-bold"
            >
              <input
                type="text"
                name="name"
                className="w-[40%] md:w-[50%] sm:w-[85%] px-4 py-2 rounded-3xl focus:outline-none text-zinc-200/80 dark:bg-white/10 border border-white/30 focus:border-white/60 backdrop-blur-md"
                placeholder="John Doe"
                required
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <input
                type="email"
                name="email"
                className="w-[40%] md:w-[50%] sm:w-[85%] px-4 py-2 rounded-3xl focus:outline-none text-zinc-200/80 dark:bg-white/10 border border-white/30 focus:border-white/60 backdrop-blur-md"
                placeholder="john.doe@example.com"
                required
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <textarea
                name="message"
                rows={4}
                className="w-[40%] md:w-[50%] sm:w-[85%] px-4 py-2 rounded-xl focus:outline-none text-zinc-200/80 dark:bg-white/10 border border-white/30 focus:border-white/60 backdrop-blur-md"
                placeholder="Enter Message..."
                required
                onFocus={onFocus}
                onBlur={onBlur}
              ></textarea>

              <button
                type="submit"
                className="text-xl text-zinc-200/90 rounded-2xl px-4 py-2 border-2 border-white/40 hover:opacity-80"
              >
                Submit
              </button>
            </form>
            <p className={`text-center p-2 text-green-600`}>{result}</p>
          </div>
          <div className="flex flex-col items-center py-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gawasvrushabh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              gawasvrushabh@gmail.com
            </a>
            <div className="flex pt-2 sm:pl-3">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2"
                >
                  {item.svg}
                </a>
              ))}
            </div>
          </div>
        </section>
        <Line isThin={true} />
        <div className="text-center pt-4 pb-2 text-sm text-gray-700 dark:text-gray-500">
          <p>© 2026 Developed by Vrushabh Gawas.</p>
        </div>
      </main>
    </>
  );
};
