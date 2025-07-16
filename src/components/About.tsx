import Image from "next/image";
import pfp from "@/public/profile.webp";

const About = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-10">
      <Image src={pfp} alt="Profile Picture" className="ml-10 w-1/2" />
      <div className="flex flex-col">
        <p className="text-blue-neon text-glow-blue ml-7 text-5xl">About Me</p>
        <p className="bg-blue-accent mt-10 w-4/5 rounded-3xl p-8 text-xl">
          Hi! My name is Wesley Wu. I’m a computer science student at the
          University of California, Riverside. On my free time, I like listening
          to music, drawing, and playing volleyball. Nice to meet you, and thank
          you for stopping by!
        </p>
      </div>
    </div>
  );
};

export default About;
