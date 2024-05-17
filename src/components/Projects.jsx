import styles from "../styles";
import { layout } from "../styles";
import Cards from "./Cards";
import { projects } from "../constants";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
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
  return (
    <section id="section" className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center w-full h-full">
        <h1 className={`${styles.heading1} ${layout.headerLayout} text-black`}>
          Projects
        </h1>
        <Slider
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
      </div>
    </section>
  );
};

export default Projects;
