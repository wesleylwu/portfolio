import projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const Projects = () => {
  return (
    <>
      <p className="text-glow-red text-red-neon p-8 text-center text-5xl">
        Projects
      </p>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8">
        {projects.map(
          ({ website, alt, name, description, icons, github, websiteLink }) => {
            const githubIndex = icons.indexOf(SiGithub);
            const leftIcons =
              githubIndex !== -1
                ? icons.filter((_, i) => i !== githubIndex)
                : icons;

            return (
              <div key={name} className="flex flex-col items-center">
                <Link
                  href={websiteLink}
                  target="_blank"
                  className="w-2/3 overflow-hidden rounded-t-3xl"
                >
                  <Image src={website} alt={alt} />
                </Link>
                <div className="bg-blue-accent w-2/3 rounded-b-3xl p-4 text-xl">
                  <p className="mt-2 text-center text-2xl font-bold">{name}</p>
                  <p className="mt-2 text-base">{description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex space-x-4">
                      {leftIcons.map((Icon, index) => (
                        <Icon key={index} className="text-3xl text-white" />
                      ))}
                    </div>
                    {githubIndex !== -1 && (
                      <Link
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiGithub className="hover:text-blue-dark text-3xl transition-colors duration-200 ease-in-out" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          },
        )}
      </div>
    </>
  );
};

export default Projects;
