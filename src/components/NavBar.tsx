"use client";
// import { useState } from "react";
import navBar from "@/data/navBar";
import Divider from "@/components/Divider";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  // const [isNavOpen, setIsNavOpen] = useState(false);

  //   const toggleNav = () => {
  //     setIsNavOpen(!isNavOpen);
  // };

  return (
    <>
      <div className="font-quicksand bg-blue-primary flex items-center justify-between p-10 text-2xl">
        <p className="text-blue-neon">Wesley Wu</p>
        <div className="flex flex-row-reverse space-x-25 space-x-reverse text-white">
          {[...navBar].reverse().map(({ text, link }, index) => (
            <ScrollLink
              to={link}
              key={index}
              smooth={true}
              duration={500}
              className="hover:text-blue-dark cursor-pointer transition-colors duration-300 ease-in-out"
            >
              {text}
            </ScrollLink>
          ))}
        </div>
      </div>
      <Divider />
    </>
  );
};

export default NavBar;
