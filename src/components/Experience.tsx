"use client";

import Image from "next/image";
import ExperienceDivder from "@/components/ExperienceDivider";
import experiences from "@/data/experience";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-glow-purple text-purple-neon mt-10 flex justify-center text-3xl md:mt-20 md:ml-30 md:justify-start md:text-3xl lg:text-4xl xl:text-5xl"
        id="experience"
      >
        Experience
      </motion.p>
      <ExperienceDivder />
      {experiences.map(({ logo, alt, name, roles }, index) => (
        <div key={name}>
          {index !== 0 && <ExperienceDivder />}
          <div className="mx-auto mt-10 flex w-10/12 flex-col items-center gap-x-10 md:flex-row">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="flex flex-col items-center justify-center md:w-1/3"
            >
              <Image
                src={logo}
                alt={alt}
                className={`w-1/3 md:w-3/5 ${index === 1 ? "mr-5 md:mr-10 lg:mr-13" : ""}`}
              />
              <p className="mt-4 text-center text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
                {name}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="mt-5 flex flex-col justify-center space-y-5 md:mt-0 md:w-2/3"
            >
              {roles.map(({ title, date, details }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-blue-accent rounded-3xl p-8 text-sm md:text-base xl:text-lg"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-base font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                      {title}
                    </p>
                    <p className="text-gray-primary text-sm font-semibold md:text-base lg:text-lg xl:text-xl">
                      {date}
                    </p>
                  </div>
                  <ul className="ml-5 list-disc space-y-2">
                    {details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      ))}
      <ExperienceDivder />
    </>
  );
};

export default Experience;
