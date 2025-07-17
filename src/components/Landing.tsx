import Image from "next/image";
import mtFujiAndMoon from "@/public/mtFujiAndMoon.webp";

const Landing = () => {
  return (
    <div
      className="bg-blue-secondary relative flex h-screen items-center justify-center text-white"
      id="home"
    >
      <p className="mb-20 text-5xl">Hi, I'm Wesley!</p>
      <Image
        src={mtFujiAndMoon}
        alt="Mount Fuji and Moon"
        className="absolute bottom-0 w-full"
      />
    </div>
  );
};

export default Landing;
