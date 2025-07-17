import Divider from "@/components/Divider";
import socials from "@/data/socials";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-blue-primary">
      <Divider />
      <div className="flex flex-row justify-center gap-x-20 p-10">
        {socials.map(({ Icon, link }, index) => (
          <Link key={index} href={link} className="" target="_blank">
            <Icon className="hover:text-blue-dark text-5xl transition-colors duration-300 ease-in-out" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
