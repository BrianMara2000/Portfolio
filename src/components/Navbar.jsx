import { useEffect, useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import styles from "../styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [animationApplied, setAnimationApplied] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (index, id) => {
    setActiveLink(id);
    setToggle(false);
    setAnimationApplied((prevAnimation) => !prevAnimation);
  };

  const toggleMenu = () => {
    setToggle((prevToggle) => !prevToggle);
    setAnimationApplied((prevAnimation) => !prevAnimation);
  };

  const handleScroll = () => {
    const sections = navLinks.map((link) => document.getElementById(link.id));
    const scrollPos = window.scrollY + window.innerHeight / 2;
    let currentSection = navLinks[0].id;

    sections.forEach((section, index) => {
      if (section.offsetTop <= scrollPos) {
        currentSection = navLinks[index].id;
      }
    });

    setActiveLink(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Update active link on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center py-6 z-0">
      <div className="flex justify-center items-center">
        <img src={logo} alt="" className="w-[95px] h-[70px]" />
        <h1 className="font-poppins text-2xl font-extrabold text-white">
          CodeBM
        </h1>
      </div>

      <ul className="list-none md:flex hidden flex-1 justify-end items-center">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`relative flex justify-center items-center  font-poppins text-[20px] cursor-pointer font-normal hover:text-secondary transition-all ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } ${
              activeLink === link.id
                ? "text-secondary after:content-[''] after:absolute after:left-1/2 after:-bottom-[15px] after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-[2px] after:bg-vivid"
                : "text-white"
            }`}
            onClick={() => handleClick(index, link.id)}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Devices */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        <div
          id="nav-icon2"
          className={`${toggle && "open"} z-20`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div
          className={`md:flex ${
            toggle ? styles.toggleTrue : styles.toggleFalse
          } fixed top-0 bottom-10 right-0 w-full h-[100vh] bg-primary z-10 `}
        >
          <ul
            className={`${
              toggle && "flex"
            } list-none flex-col flex-1 justify-center items-center`}
            key={1}
          >
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`relative flex-wrap justify-center items-center text-white font-poppins text-2xl cursor-pointer font-normal text-center mb-20 opacity-0 ${
                  activeLink === link.id ? "text-secondary" : ""
                }`}
                onClick={() => handleClick(index, link.id)}
                style={{
                  animation: animationApplied
                    ? `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
                    : "",
                }}
              >
                <a
                  href={`#${link.id}`}
                  className="no-underline hover:text-secondary"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
