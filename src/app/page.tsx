import Landing from "@/components/Landing";
import About from "@/components/About";
import Experience from "@/components/Experience";

const Home = () => {
  return (
    <div className="bg-blue-primary text-white">
      <Landing />
      <About />
      <Experience />
    </div>
  );
};

export default Home;
