import Button from "./Button.jsx";
import {
  profile,
  techStack,
  c,
  github,
  javascript,
  laravel,
  mysql,
  php,
  react,
  vue,
  figma,
} from "../assets";
import styles from "../styles";
import { layout } from "../styles";
import { useEffect } from "react";
import useScroll from "../hooks/useScroll.js";

const About = () => {
  useEffect(() => {
    const addAnimation = () => {
      const scrollers = document.querySelectorAll(".scroller");
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  useScroll();

  return (
    <section id="about" className="flex flex-col justify-center lg:h-screen">
      <div className={`${layout.headerLayout} mb-28`} data-aos="fade-down">
        <h1 className={`${styles.heading1}`}>About Me</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div
          className="relative w-[90%] sm:w-[70%] md:w-[44%] md:h-[50vh] mb-52 items-center justify-center text-center p-20  text-white font-poppins shadow-neuromorphic rounded-3xl"
          data-aos="fade-right"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-[50%]">
            <img src={profile} alt="Profile Avatar" />
          </div>
          <h2 className=" font-bold text-2xl mt-10">Software Engineer</h2>
          <p className="mt-10">
            Highly motivated and detail-oriented Software Engineer with hands-on
            experience in frontend and backend development.
          </p>
          <Button title="Hire Me" margin="mt-10" />
        </div>

        <div
          className="relative w-[90%] sm:w-[70%] md:w-[44%] md:h-[50vh] mb-52 items-center justify-center text-center p-20 text-white font-poppins rounded-3xl shadow-neuromorphic"
          data-aos="fade-left"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-[50%] w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center">
            <img
              src={techStack}
              alt="Profile Avatar"
              className="h-[100px] w-[100px]"
            />
          </div>
          <h2 className=" font-bold text-2xl mt-14">Technology Stack</h2>
          <div className="scroller w-full">
            <div className="flex flex-wrap items-center w-full h-[100px] py-5 gap-10 mt-20 scroller__inner">
              <img src={c} alt="C Icon" />
              <img src={javascript} alt="JavaScript Icon" />
              <img src={php} alt="Php Icon" />
              <img src={react} alt="React Icon" />
              <img
                src={vue}
                alt="Vue Icon"
                className="h-[40px] object-contain"
              />
              <img src={laravel} alt="Laravel Icon" />
              <img src={mysql} alt="MySQL Icon" />
              <img src={github} alt="Github Icon" />
              <img src={figma} alt="Figma Icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
