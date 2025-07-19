"use client";

import Image from "next/image";
import mtFujiAndMoon from "@/public/mtFujiAndMoon.webp";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Landing = () => {
  const fullText = "Welcome!";
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-blue-secondary relative flex h-[70vh] items-center justify-center text-white sm:h-[80vh] md:h-screen"
      id="home"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl md:-translate-y-30 md:text-3xl lg:text-4xl xl:text-5xl"
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </motion.p>

      <Image
        src={mtFujiAndMoon}
        alt="Mount Fuji and Moon"
        className="absolute bottom-0 w-full"
      />

      <div className="absolute z-0 mt-90 h-[250px] w-[250px] rounded-full bg-white/10 blur-3xl sm:h-[300px] sm:w-[300px] md:mt-80 md:h-[350px] md:w-[350px] lg:mt-50 lg:h-[400px] lg:w-[400px]" />

      <div className="via-blue-primary to-blue-primary blur-4xl absolute -bottom-5 h-[5vh] w-full bg-gradient-to-b" />
    </div>
  );
};

export default Landing;
