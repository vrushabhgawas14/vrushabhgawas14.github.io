import { NavElement, socials, mode } from "../constants/HeaderDetails";
import { useState, useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState(String);
  const [isOpen, setIsOpenMenu] = useState(false);
  const localTheme = localStorage.getItem("savedTheme");

  const darkSVG = mode.darkSvg;
  const lightSVG = mode.lightSvg;
  const bar = mode.bar;

  // Checks for System theme and previous localStorage theme if any.
  useEffect(() => {
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;
    if (localTheme === "dark" || (!localTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("savedTheme", "dark");
    }
  }, []);

  // Changes local storage and adds dark or light class.
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("savedTheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("savedTheme", "light");
    }
  }, [theme]);

  // Changes theme state, and helps change icon
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const dropdown = () => {
    setIsOpenMenu(!isOpen);
  };

  window.addEventListener("mousemove", function () {
    if (isOpen) {
      setIsOpenMenu(false);
    }
  });

  return (
    <div className="flex justify-end sm:justify-between items-center px-1 py-5 pr-12 relative sm:pr-6 bg-secondary-light dark:bg-secondary-dark dark:text-zinc-300">
      <div className="flex items-center">
        <div className={`${isOpen ? "textPopup" : "sm:hidden"} mr-6 z-10`}>
          {NavElement.map((item) => (
            <a
              href={item.url}
              className="px-4 font-bold text-2xl sm:text-xl hover:text-hover-black dark:hover:text-hover-light"
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="flex sm:pl-3">
          {socials.map((item) => (
            <a href={item.url} target="_blank" className="px-2">
              {item.svg}
            </a>
          ))}
        </div>

        <div className="text-2xl px-3">|</div>

        <div className="flex items-center">
          <button onClick={handleTheme}>
            {theme === "dark" ? lightSVG : darkSVG}
          </button>
        </div>
      </div>
      <button className="hidden sm:block w-6 h-6" onClick={dropdown}>
        {bar}
      </button>
    </div>
  );
}
