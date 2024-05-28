import { useState } from "react";
import { socialLinks } from "../constants";
import useScroll from "../hooks/useScroll";

const Footer = () => {
  const [hoveredLinkId, setHoveredLinkId] = useState(null);

  const handleMouseEnter = (linkId) => {
    setHoveredLinkId(linkId);
  };

  const handleMouseLeave = () => {
    setHoveredLinkId(null);
  };

  useScroll();

  return (
    <footer
      id="footer"
      className="flex flex-col justify-center items-center h-[300px] space-y-10"
    >
      <div className="flex items-center justify-center space-x-14">
        {socialLinks.map((link, index) => (
          <a
            key={link.id}
            href={link.link}
            className={`social-container group flex items-center justify-center text-white text-xl w-[70px] h-[70px] bg-[#120422] p-5 rounded-full overflow-hidden duration-300  active:scale-90 active:duration-300`}
            onMouseEnter={() => handleMouseEnter(link.id)}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundColor:
                hoveredLinkId === link.id ? link.hoverColor : "#120422",
            }}
            data-aos="fade-down"
            data-aos-delay={index * 100}
          >
            <i
              className={`${link.icon} socialSvg group-hover:animate-slideInTop`}
            ></i>
          </a>
        ))}
      </div>
      <p className="font-poppins font-normal text-white ">
        Copyright &copy; Brian Mara - All Rights Reserved 2024{" "}
      </p>
    </footer>
  );
};

export default Footer;
