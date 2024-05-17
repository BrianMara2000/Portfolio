import { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import styles from "../styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [animationApplied, setAnimationApplied] = useState(false);

  const handleClick = (index) => {
    if (index === 2) {
      setArrow((prevArrow) => !prevArrow);
    }
  };

  const toggleMenu = () => {
    setToggle((prevToggle) => !prevToggle);
    setAnimationApplied((prevAnimation) => !prevAnimation);
  };

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
            className={`flex justify-center items-center text-white font-poppins text-[20px] cursor-pointer font-normal hover:text-secondary transition-all ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            onClick={() => {
              handleClick(index);
            }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
            {/* {index === 2 && (
              <i
                className={`${
                  arrow ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"
                } ml-3 cursor-pointer`}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setArrow((prevArrow) => !prevArrow);
                }}
              ></i>
            )}

            {index === 2 && arrow && (
              <div
                className={`absolute ${
                  arrow ? "animate-fadeIn" : ""
                }  flex items-center justify-center w-[250px] bg-primary  z-[1000] py-5 px-5 rounded-xl `}
              >
                <ul>
                  <h1 className="text-white mb-5 hover:text-secondary">
                    Software Projects
                  </h1>
                  <h1 className="text-white hover:text-secondary">
                    Hardware Projects
                  </h1>
                </ul>
              </div>
            )} */}
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
                className={`relative flex-wrap justify-center items-center text-white font-poppins text-2xl cursor-pointer font-normal text-center ${
                  index === 2 && arrow
                    ? "mb-0"
                    : index === navLinks.length - 1
                    ? "mb-0"
                    : "mb-20"
                } opacity-0`}
                onClick={handleClick}
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
                {/* {index === 2 &&
                  <i
                    className={`${arrow ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'} ml-3 cursor-pointer`}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      setArrow(prevArrow => !prevArrow);
                    }}
                  ></i>
                }
                {index === 2 && arrow && 
                  <div className={`${arrow ? 'flex translate-x-0 transition-transform' : 'hidden translate-x-full transition-transform'} w-full mt-0 bg-primary z-10 py-5 text-xl`}
                  style={{ animation: arrow ? styles.toggleTrue : styles.toggleFalse }}>
                    <ul>
                      <h1 className='text-white mb-5 hover:text-secondary'>Software Projects</h1>
                      <h1 className='text-white hover:text-secondary'>Hardware Projects</h1>
                    </ul>
                  </div>
                } */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
