import Landing from "@/components/Landing";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <div className="bg-blue-primary text-white">
      <Landing />
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default Home;
