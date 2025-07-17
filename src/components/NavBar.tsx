"use client";

import navBar from "@/data/navBar";
import Divider from "@/components/Divider";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="font-quicksand bg-blue-primary flex items-center justify-between p-10 text-2xl">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-100}
          className="text-blue-neon text-glow-blue neon-pulse cursor-pointer"
        >
          Wesley Wu
        </ScrollLink>{" "}
        <div className="flex flex-row-reverse space-x-25 space-x-reverse text-white">
          {[...navBar].reverse().map(({ text, link }, index) => (
            <ScrollLink
              to={link}
              key={index}
              smooth={true}
              duration={500}
              className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              spy={true}
              offset={-130}
              activeClass="text-blue-dark "
            >
              {text}
            </ScrollLink>
          ))}
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default NavBar;
