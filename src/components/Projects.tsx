"use client";

import projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-glow-red text-red-neon p-8 text-center text-3xl md:mt-10 md:text-3xl lg:text-4xl xl:text-5xl"
        id="projects"
      >
        Projects
      </motion.p>

      <div className="mx-auto flex max-w-7xl grid-cols-2 flex-col gap-8 md:grid">
        {projects.map(
          (
            { website, alt, name, description, icons, github, websiteLink },
            index,
          ) => {
            const githubIndex = icons.indexOf(SiGithub);
            const leftIcons =
              githubIndex !== -1
                ? icons.filter((_, i) => i !== githubIndex)
                : icons;

            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <Link
                  href={websiteLink}
                  target="_blank"
                  className="w-3/5 overflow-hidden rounded-t-3xl md:w-2/3"
                >
                  <Image src={website} alt={alt} />
                </Link>

                <div className="bg-blue-accent w-2/3 rounded-b-3xl p-4">
                  <p className="mt-2 text-center text-lg font-bold lg:text-xl xl:text-2xl">
                    {name}
                  </p>
                  <p className="mt-2 text-sm md:text-base">{description}</p>
                  <div className="mt-4 flex items-center justify-between text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    <div className="flex space-x-4">
                      {leftIcons.map((Icon, index) => (
                        <Icon key={index} />
                      ))}
                    </div>
                    {githubIndex !== -1 && (
                      <Link
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiGithub className="hover:text-blue-dark transition-colors duration-200 ease-in-out" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          },
        )}
      </div>
    </>
  );
};

export default Projects;
