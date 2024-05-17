import { TypeAnimation } from "react-type-animation";
import { linkedin, facebook, githubIcon, youtube, hero } from "../assets";
import { layout } from "../styles";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className={`${layout.section}`}>
      <div className="text-white w-full sm:w-[50%] p-8 sm:p-0 justify-center items-center tracking-wider z-10">
        {/* FEATURED TEXT */}
        <div className="flex flex-col justify-center items-center sm:items-start mb-5">
          <h2 className="font-poppins font-semibold text-center md:text-left md:font-bold text-2xl md:text-4xl mb-7 ">
            Hi there! I&apos;m Brian Mara, a
          </h2>
          <div className="mb-5 flex justify-center items-center text-center sm:text-left">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Computer Engineer",
                1000,
                "Front-End Developer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              className="font-poppins text-4xl md:text-6xl items-center font-extrabold text-vivid"
              repeat={Infinity}
            />
          </div>
          <p className="font-poppins font-normal text-md md:text-xl tracking-widest sm:leading-6 md:leading-8 text-center sm:text-left">
            Highly motivated and detail-oriented Software Engineer with hands-on
            experience in frontend and backend development.
          </p>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center sm:justify-start gap-5 mb-5">
          <Button title="My Works" />
          <Button title="Download CV">
            <span>
              <i className="fa-regular fa-file"></i>
            </span>
          </Button>
        </div>

        {/* Social Icons */}
        <div className="relative flex left-[50%] sm:left-0 -translate-x-1/2 mt-10 w-[430px] sm:w-full sm:translate-x-0 items-center justify-center sm:justify-start gap-14 sm:gap-10">
          <div className="box-shadow">
            <img src={linkedin} alt="" />
          </div>
          <div className="box-shadow">
            <img src={facebook} alt="" />
          </div>
          <div className="box-shadow">
            <img src={githubIcon} alt="" />
          </div>
          <div className="box-shadow">
            <img src={youtube} alt="" />
          </div>
          <div className="absolute w-[50px] h-[50px] rounded-full animate-iconSlideXs sm:animate-iconSlideSm hover:pause cursor-pointer"></div>
        </div>
      </div>
      <div className="hidden relative sm:flex w-[40%] justify-center items-center z-10 ">
        <img
          src={hero}
          alt=""
          className="object-contain md:h-[600px] md:w-[600px]"
        />
      </div>
      <div className="bg-[#B487D0] hidden sm:flex absolute w-[300px] h-[300px] md:w-[620px] md:h-[350px] top-[30%] right-[10%] md:right-[3%] lg:right-[15%] rounded-full z-0 opacity-80 blur-[150px] md:blur-[200px]"></div>
    </section>
  );
};

export default Hero;
