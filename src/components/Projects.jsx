import styles from "../styles";
import { layout } from "../styles";
import Cards from "./Cards";
import { projects } from "../constants";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useState } from "react";

const Projects = () => {
  const [isTouchedPrev, setIsTouchedPrev] = useState(false);
  const [isTouchedNext, setIsTouchedNext] = useState(false);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const touchArrowPrev = () => {
    setIsTouchedPrev(true);
  };

  const endTouchArrowPrev = () => {
    setIsTouchedPrev(false);
  };

  const touchArrowNext = () => {
    setIsTouchedNext(true);
  };

  const endTouchArrowNext = () => {
    setIsTouchedNext(false);
  };

  const slider = useRef(null);

  return (
    <section id="section" className="flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center w-full h-full">
        <h1 className={`${styles.heading1} ${layout.headerLayout} mb-10`}>
          Projects
        </h1>
        <div className="flex sm:hidden mb-10">
          <p className="text-[#f1f1f1] font-normal font-poppins">
            Slide to see more
          </p>
        </div>
        <div
          onTouchStart={touchArrowPrev}
          onTouchEnd={endTouchArrowPrev}
          onClick={() => slider?.current?.slickPrev()}
          className={`absolute hidden sm:flex w-[50px] h-[50px] text-white top-[55%] left-0 translate-y-1/2 rounded-full items-center justify-center [@media(hover:hover)]:hover:bg-gray-300 [@media(hover:hover)]:hover:text-gray-900 cursor-pointer  z-10 ${
            isTouchedPrev ? "bg-gray-300 text-gray-900 transition-all" : " "
          }`}
        >
          <button>
            <i className="fa-solid fa-angle-left text-3xl transition-all"></i>
          </button>
        </div>
        <Slider
          ref={slider}
          {...settings}
          className="flex justify-between items-center font-poppins w-full gap-x-5 py-10"
        >
          {projects.map((project) => (
            <Cards
              key={project.name}
              name={project.name}
              description={project.description}
              tags={project.techStack}
              image={project.image}
            />
          ))}
        </Slider>
        <div
          onTouchStart={touchArrowNext}
          onTouchEnd={endTouchArrowNext}
          onClick={() => slider?.current?.slickNext()}
          className={`absolute hidden sm:flex w-[50px] h-[50px] text-white top-[55%] right-0 translate-y-1/2 rounded-full items-center justify-center [@media(hover:hover)]:hover:bg-gray-300 [@media(hover:hover)]:hover:text-gray-900 cursor-pointer  z-10 ${
            isTouchedNext ? "bg-gray-300 text-gray-900 transition-all" : " "
          }`}
        >
          <button>
            <i className="fa-solid fa-angle-right text-3xl transition-all"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
