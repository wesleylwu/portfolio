import Image from "next/image";
import ExperienceDivder from "@/components/ExperienceDivider";
import experiences from "@/data/experience";

const Experience = () => {
  return (
    <>
      <p className="text-glow-purple text-purple-neon ml-45 text-5xl">
        Experience
      </p>
      <ExperienceDivder />
      {experiences.map(({ logo, alt, name, roles }, index) => (
        <div key={name}>
          {index !== 0 && <ExperienceDivder />}
          <div className="mx-auto mt-10 flex w-10/12 gap-x-10">
            <div className="flex w-1/3 flex-col items-center justify-center">
              <Image
                src={logo}
                alt={alt}
                className={`w-3/5 ${index === 1 ? "mr-15" : ""}`}
              />
              <p className="mt-4 text-center text-2xl font-bold">{name}</p>
            </div>
            <div className="flex w-2/3 flex-col justify-center space-y-5">
              {roles.map(({ title, date, details }) => (
                <div
                  key={title}
                  className="bg-blue-accent rounded-3xl p-8 text-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-3xl font-bold">{title}</p>
                    <p className="text-xl text-gray-primary font-semibold">{date}</p>
                  </div>
                  <ul className="ml-5 list-disc space-y-2">
                    {details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <ExperienceDivder />
    </>
  );
};

export default Experience;
